import React, {useRef, useState} from 'react';
import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import OTPTextView from 'react-native-otp-textinput';
import ButtonField from '../../helper/ButtonField';
import ApiDataService from '../../services/ApiDataService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpVerification = ({navigation, route}) => {
  const mobilenumber = route?.params?.mobilenumber;
  const alreadyUser = route?.params?.alreadyUser;
  const [otp, setotp] = useState(route?.params?.otp);
  const [inputval, setinputval] = useState('');
  const otpInput = useRef(null);

  otpsubmit = () => {
    let body = {
      phone: mobilenumber,
      otp: otp,
    };
    // console.log(body);

    ApiDataService.Postapi('auth/verify-otp',body)
      .then(response => {
        console.log('response------->', response.data);

        AsyncStorage.setItem('UserToken', response.data.accessToken);
        if (response.data.role == 'USER') {
          if (alreadyUser == true) {
            navigation.navigate('Registration');
          } else {
            navigation.navigate('SignInScreen'), {phonenumber: mobilenumber};
          }
        }
         else {
          navigation.navigate('SignInScreen')
          AsyncStorage.setItem('isLogin', '2');
        }
      })
      .catch(e => {
        console.log(se,'something went wrong');
      });
  };

  resendotp = () => {
    let body = {
      phone: mobilenumber,
      role: 'USER',
    };

    ApiDataService.Postapi('Auth/login', JSON.stringify(body))
      .then(response => {
        // console.log("response--------------->",response.data);
        setotp(response.data.otp);
      })
      .catch(e => {
        console.log('e----->', e);
      });
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <View>
        <Image
          style={{height: 70.39, width: 80, left: 145, top: 45}}
          source={ImagePath.pettoG}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: '#1F272D',
            left: 22,
            top: 82,
          }}>
          Verification Code
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#888888',
            left: 23,
            top: 85,
            marginRight: 80,
          }}>
          5-Digit verification code has been sent to your registered mobile
          number{' '}
        </Text>
      </View>

      <View style={{top: -90}}>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 48,
            width: 316,
            left: 22,
            borderRadius: 10,
            top: 200,
            backgroundColor: '#EEEEEE',
            borderColor: '#F5F5F5',
          }}>
          <Image
            style={{height: 28, width: 28, left: 16, top: 9}}
            source={ImagePath.bharat}
          />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#1F272D',
              top: -15,
              left: 46,
            }}>
            +91
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#1F272D',
              top: -34,
              left: 75,
            }}>
            {mobilenumber}
          </Text>
          {/* // placeholder=" +91   89622 12354" */}
          {/* placeholderTextColor={'#1F272D'} */}

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#1F272D',
                left: 255,
                top: -54,
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{top: -35}}>
        <OTPTextView
          // ref={(e) => (otpInput.current = e)}
          ref={e => (otpInput.current = e)}
          handleTextChange={text => {
            otpInput.current = text;
            setinputval(text);
          }}
          autoFocus={true}
          inputCount={4}
          keyboardType="numeric"
          containerStyle={{marginTop: 160, margin: 20}}
          textInputStyle={{
            borderBottomWidth: 2,
            borderWidth: 2,
            borderRadius: 10,

            borderColor: '#F5F5F5',
            // color: '#F5F5F5',
            color: '#38AFE7',
            backgroundColor: '#F5F5F5',
          }}
        />
      </View>
      <TouchableOpacity style={{top: -35}} onPress={() => otpsubmit()}>
        <View
          style={{
            backgroundColor: '#F14647',
            height: 48,
            width: 316,
            borderRadius: 10,
            left: 22,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#FFFFFF',
              alignSelf: 'center',
              top: 12,
            }}>
            Submit
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{top: -32}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#9D9D9D',
            margin: 10,
            alignSelf: 'center',
          }}>
          Haven’t received the verification code?
        </Text>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', margin: -40}}
        onPress={() => resendotp()}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#F4533A'}}>
          Resend
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default OtpVerification;
