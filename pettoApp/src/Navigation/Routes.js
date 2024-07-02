import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../Screens/SignInScreen';
import Registration from '../Screens/Registration';
import ProfileImage from '../Screens/ProfileImage';
import OtpVerification from '../Screens/OtpVerification';
// // import HomeScreen from '../Screens/HomeScreen';
import HomeScreen2 from '../Screens/HomeScreen2';
import HomeScreen3 from '../Screens/HomeScreen3';

import ProductDetail from '../Screens/ProductDetail';
import SearchScreen from '../Screens/SearchScreen';
import AllProducts from '../Screens/AllProducts';
import FilterScreen from '../Screens/FilterScreen';
import CartScreen from '../Screens/CartScreen';
import CartScreen2 from '../Screens/CartScreen2';
import DeliveryAddress from '../Screens/DeliveryAddress';
import PaymentScreen from '../Screens/PaymentScreen';
import OrderConfirm from '../Screens/OrderConfirm';
// import SettingScreen from '../Screens/SettingScreen';
// import MyProfile from '../Screens/MyProfile';
// import MyOrders from '../Screens/MyOrders';
// import HelpandSupport from '../Screens/HelpandSupport';
// import TermsandPrivacyPolicy from '../Screens/TermsandPrivacyPolicy';
// import FavoriteProducts1 from '../Screens/FavoriteProducts1';


// import SlideStart from '../Screens/SlideStart';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
         {/* <Stack.Screen  name='SlideStart' component={SlideStart}/>   */}
         {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />  
         <Stack.Screen  name='IntroScreen1' component={IntroScreen1}/> 
         <Stack.Screen  name='IntroScreen2' component={IntroScreen2}/> 
         <Stack.Screen  name='IntroScreen3' component={IntroScreen3}/>  */}


        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ProfileImage" component={ProfileImage} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} /> 
           {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
         <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
        <Stack.Screen name="HomeScreen3" component={HomeScreen3} /> 
         <Stack.Screen name="ProductDetail" component={ProductDetail} /> 
         <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} /> 
         <Stack.Screen name="CartScreen" component={CartScreen} />
         <Stack.Screen name="CartScreen2" component={CartScreen2} /> 
         <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} /> 
         <Stack.Screen name="PaymentScreen" component={PaymentScreen} /> 
         <Stack.Screen name="OrderConfirm" component={OrderConfirm} /> 
        {/* <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupport} />
        <Stack.Screen
          name="TermsandPrivacyPolicy"
          component={TermsandPrivacyPolicy} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
