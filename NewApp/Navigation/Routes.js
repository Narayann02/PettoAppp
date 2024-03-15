import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Flatlist from '../src/Screens/Home/Flatlist';
// import Sectionlist from '../src/Screens/Home/Sectionlist';
// import  Modal  from '../src/Screens/Home/Modal';
//import  ActivityIndicator  from '../src/Screens/Home/ActivityIndicator';
// import TabNavigation from './src/Screens/Home/TabNavigation'
// import Grid from '../src/Screens/Home/Grid'
// import TabNavigation from '../src/Screens/Home/TabNavigation'
// import Photos from '../src/Screens/Home/Photos';
// import Linking from './src/Screens/Home/Linking';
// import StatusBar from '../src/Screens/Home/StatusBar';
// import  RefreshControl  from '../src/Screens/Home/RefreshControl';
// import Animated from '../src/Screens/Home/Animated';
// import Dimention from '../src/Screens/Home/Dimention'
// import PixelRatio from '../src/Screens/Home/PixelRatio';
// import KeyboardAvoidingView from '../src/Screens/Home/KeyboardAvoidingView';
import Practice from '../src/Screens/Home/Practice';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Sectionlist" component={Sectionlist} /> */}
        {/* <Stack.Screen name="Modal" component={Modal} /> */}
        {/* <Stack.Screen name="ActivityIndicator" component={ActivityIndicator} /> */}
        {/* <Stack.Screen  name="" component={TabNavigation}/> */}
        {/* <Stack.Screen name="xyz" component={Grid} /> */}
        {/* <Stack.Screen name="xyz" component={TabNavigation} /> */}

        {/* apa<Stack.Screen name='photods' component={Photos} /> */}

        {/* <Stack.Screen name='Linking' component={Linking} /> */}
        {/* <Stack.Screen name='StatusBar' component={StatusBar} /> */}
        {/* <Stack.Screen name='Refresh'component={RefreshControl} /> */}
        {/* <Stack.Screen  name='Animated' component={Animated}/> */}

        {/* <Stack.Screen  name='Dimention' component={Dimention}/> */}
        {/* <Stack.Screen  name='PixelRatio' component={PixelRatio}/> */}
        {/* <Stack.Screen */}
          {/* name="KeyboardAvoidingView" */}
          {/* component={KeyboardAvoidingView} */}
        {/* /> */}

        <Stack.Screen name = 'Practice' component={Practice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
