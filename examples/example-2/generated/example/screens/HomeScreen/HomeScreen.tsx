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

export const HomeScreen = () => {
  undefined;

  undefined;

  undefined;
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#001253'}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: '#E14D2A',
          }}>
          Welcome to @muhtalipdede/rn-generator
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: '#E14D2A',
            borderWidth: 1,
            margin: 10,
            borderRadius: 5,
          }}
          value=""
          placeholder={'Email'}
          placeholderTextColor={'#E14D2A'}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: '#E14D2A',
            borderWidth: 1,
            margin: 10,
            borderRadius: 5,
          }}
          value=""
          placeholder={'Password'}
          placeholderTextColor={'#E14D2A'}
        />
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: '#E14D2A',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: '50%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#E14D2A',
          }}>
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;
