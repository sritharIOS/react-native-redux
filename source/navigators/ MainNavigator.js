import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './Routes';
import SigninScreen from '../modules/signin/SigninScreen';
import HomeScreen from '../modules/home/HomeScreen';


  
  const Stack = createNativeStackNavigator();
  
  function  MainNavigator() {
    return (
         <Stack.Navigator screenOptions={{gestureEnabled: true}}  initialRouteName={Routes.SIGNIN_SCREEN}>
          <Stack.Screen name={Routes.SIGNIN_SCREEN} component={SigninScreen}  options={{headerShown: false, animationEnabled: true}}/>
          <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen}  options={{headerShown: false, animationEnabled: true}}/>
        </Stack.Navigator>
     );
  }
  
  export default  MainNavigator;