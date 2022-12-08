import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const Example1Screen = () => {
  undefined;

  undefined;

  const goTo = (screenName: string) => {
    undefined;
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFBEB',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#495579',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#263159',
            height: 50,
            margin: 10,
          }}>
          <Text style={{fontSize: 20, color: '#FFFBEB'}}>Hello World</Text>
        </View>
        <Text style={{fontSize: 20, color: '#263159', textAlign: 'center'}}>
          This is a simple example of a React Native app built with the
        </Text>
        <Text style={{fontSize: 20, color: '#FF7000', textAlign: 'center'}}>
          @muhtalipdede/rn-generator CLI tool
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Example1Screen;
