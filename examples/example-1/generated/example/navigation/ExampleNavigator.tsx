import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Example1Screen from '../screens/Example1Screen/Example1Screen';

const Stack = createStackNavigator();

const ExampleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Example1Screen"
        component={Example1Screen}
        options={{headerShown: false, animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default ExampleNavigator;
