import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AboutNavigator from './AboutNavigator';
import ContactNavigator from './ContactNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="AboutNavigator"
          component={AboutNavigator}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="ContactNavigator"
          component={ContactNavigator}
          options={{headerShown: false, animationEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
