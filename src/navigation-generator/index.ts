import * as fs from 'fs';

export default function navigationGenerator(projectDir: string, navigation: any) {
    const navigationDir = `${projectDir}/navigation`;
    if (!fs.existsSync(navigationDir)) {
        fs.mkdirSync(navigationDir);
    }

    const importNavigatorAndScreen = (item: any) => {
        if (item.type === 'screen')
            return `import ${item.name}Screen from '../screens/${item.name}Screen/${item.name}Screen';`;
        else if (item.type === 'navigation')
            return `import ${item.name}Navigator from './${item.name}Navigator';`;
        else return '';
    };

    const addStackScreens = (item: any) => {
        if (item.type === 'screen')
            return `<Stack.Screen name="${item.name}Screen" component={${item.name}Screen} options={{ headerShown: false, animationEnabled: false }} />`;
        else if (item.type === 'navigation')
            return `<Stack.Screen name="${item.name}Navigator" component={${item.name}Navigator} options={{ headerShown: false, animationEnabled: false }} />`;
        else return '';
    };


    const navigationTsxPath = `${navigationDir}/${navigation.name}Navigator.tsx`;
    const navigationTsx = `import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
${navigation?.children?.map((item: any) => importNavigatorAndScreen(item)).join('\n')}

const Stack = createStackNavigator();

const ${navigation.name}Navigator = () => {
    return (
        ${navigation.name == "App" ? "<NavigationContainer>" : ""}
            <Stack.Navigator>
                ${navigation?.children?.map((item: any) => addStackScreens(item)).join('\n')}
            </Stack.Navigator>
        ${navigation.name == "App" ? "</NavigationContainer>" : ""}
    );
}

export default ${navigation.name}Navigator;
`;
    fs.writeFileSync(navigationTsxPath, navigationTsx);
}