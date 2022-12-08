import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AboutScreen from '../screens/AboutScreen/AboutScreen';

const Stack = createStackNavigator();

const AboutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AboutNavigator;
