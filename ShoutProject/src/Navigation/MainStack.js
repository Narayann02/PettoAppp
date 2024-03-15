import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen1,Setting,TermsandCondition,Myprofile,ChangePassword,RandomChat} from '../Screens/';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen1" component ="HomeScreen1"  />
        <Stack.Screen name="Setting" component ="Setting"  />
        <Stack.Screen name="TermsandCondition" component ="TermsandCondition"  />
        <Stack.Screen name="Myprofile" component ="Myprofile"  />
        <Stack.Screen name="ChangePassword" component ="ChangePassword"  />
        <Stack.Screen name="RandomChat" component ="RandomChat"  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
