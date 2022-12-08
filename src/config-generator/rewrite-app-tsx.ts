import fs from 'fs';

export default function rewriteAppTsx(projectDir: string) {
    const appTsxPath = `${projectDir}/App.tsx`;
    const appTsxContent = `
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigator from './navigation/AppNavigator';

const store = createStore(() => {});

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <AppNavigator></AppNavigator>
            </Provider>
        </GestureHandlerRootView>
    );
};

export default App;    
`;

    fs.writeFileSync(appTsxPath, appTsxContent);
}

