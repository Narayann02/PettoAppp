import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen';
// import SplashScreen from '../Screens/SplashScreen/Index';
import SignUpScreen from '../Screens/SignupScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import OtpVerification from '../Screens/OtpVerification';
import ResetPassword from '../Screens/ResetPassword';

import GenderScreen from '../Screens/GenderScreen';
import CreateAccount from '../Screens/CreateAccount';

// import HomeScreen1 from '../Screens/HomeScreen1';
import HomeScreen2 from '../Screens/HomeScreen2';
import RandomChat from '../Screens/RandomChat';
import Newchat from '../Screens/Newchat';
import Startchat from '../Screens/Startchat';
import Newchatt2 from '../Screens/Newchatt2';
import Endchat from '../Screens/Endchat';
import addedfriend from '../Screens/addedfriend';
import addedfriend2 from '../Screens/addedfriend2';
import uploadphoto from '../Screens/uploadphoto';
import unfriend from '../Screens/unfriend';
import Blockscreen from '../Screens/Blockscreen';
import Setting from '../Screens/Setting';
import Myprofile from '../Screens/Myprofile';
import ChangePassword from '../Screens/ChangePassword';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import TermsandCondition from '../Screens/TermsandCondition';
import Logout from '../Screens/Logout';
import HomeScreen1 from '../Screens/HomeScreen1';
import APIpractice from '../Screens/ApIpractice';
import AsyncStorageScreen from '../Screens/AsyncStorageScreen';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignUpScreen} />
        {/* <Stack.Screen name="MyInterestScreen" component={MyInterestScreen} /> */}
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />

        <Stack.Screen name="RandomChat" component={RandomChat} />
        <Stack.Screen name="Newchat" component={Newchat} />
        <Stack.Screen name="Startchat" component={Startchat} />
        <Stack.Screen name="Newchatt2" component={Newchatt2} />
        <Stack.Screen name="Endchat" component={Endchat} />
        <Stack.Screen name="addedfriend" component={addedfriend} />
        <Stack.Screen name="addedfriend2" component={addedfriend2} />
        <Stack.Screen name="uploadphoto" component={uploadphoto} />
        <Stack.Screen name="unfriend" component={unfriend} />
        <Stack.Screen name="Blockscreen" component={Blockscreen} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsandCondition" component={TermsandCondition} />
        <Stack.Screen name="Logout" component={Logout} />

        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />

        <Stack.Screen name="Myprofile" component={Myprofile} />

        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />  */}
        {/* <Stack.Screen name="APIpractice" component={APIpractice} /> */}
        {/* <Stack.Screen name="AsyncStorageScreen" component={AsyncStorageScreen} /> */}

        <Stack.Screen name="Homescreen1" component={HomeScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
