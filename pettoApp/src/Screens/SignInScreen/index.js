import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ApiDataService from '../../services/ApiDataService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}) => {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [loading, setloading] = useState(false);
  const [inputPhonenumber, setInputphonenumber] = useState({
    value: null,
    message: '',
    isValid: false,
  });               

  const validatePhonenumber = _in => {
    try {
      setInputphonenumber(prev => ({...prev, value: _in}));
      if (!_in || _in.length !== 10 || !/^[0-9]+$/.test(_in)) {
        setInputphonenumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter valid mobile number',
        }));
        // setbtndisable(false)
      } else if (_in.length === 0) {
        setInputphonenumber(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter valid mobile number',
        }));
        // setbtndisable(false)
      } else {
        setInputphonenumber(prev => ({...prev, isValid: false, message: ''}));
        // setbtndisable(true)
      }
    } catch (error) {}
  };
  //   useEffect(() => {
  //     AsyncStorage.getItem('latlong', (err, ln) => {
  //         let  data =  JSON.parse(ln);
  //       setlatitude(data.lat);
  //       setlongitude(data.lng)
  //     })
  // }, [])

  const loginsubmit = () => {
    let body = {
      phone: inputPhonenumber.value,
      role: 'USER',
      device_token: '',
      latitude: '',
      longitude: '',
    };
    setloading(true);
    ApiDataService.Postapi('auth/login', body)

      .then(response => {
        console.log('resoubnse---------', response.data);
        setloading(false);
        navigation.navigate('OtpVerification', {
          mobilenumber: inputPhonenumber.value,
          otp: response.data.otp,
          alreadyUser: response.data.alreadyUser,
        });
        calltoastmessage(response.data.message);
      })
      .catch(e => {
        console.log('e--------', e);
        setloading(false);
      });
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'large'} color={'red'} style={{alignItems:'center',flex:1}}/>
      ) : (
        <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
          <View style={{}}>
            <Image
              style={{height: 70.39, width: 80, left: 145, top: 55}}
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
                top: 105,
              }}>
              Enter your mobile number
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#888888',
                left: 22,
                marginRight: 45,
                top: 113,
              }}>
              Please Enter your Registered Mobile Number to get OTP
            </Text>
          </View>

          <View>
            <View
              style={{
                borderBottomWidth: 1,
                borderWidth: 1,
                height: 48,
                width: 316,
                left: 22,
                borderRadius: 10,
                top: 150,
                backgroundColor: '#F5F5F5',
                borderColor: '#F5F5F5',
              }}>
              <Image
                style={{height: 28, width: 28, left: 16, top: 9}}
                source={ImagePath.bharat}
              />
              <Text style={{fontSize: 14, fontWeight: '400', color: '#1F272D',marginTop:-15,marginLeft:50}}>
                +91
              </Text>
              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#1F272D',
                 marginLeft:80,
                 marginTop:-33
                }}
                placeholder=" 89622 12354"
                placeholderTextColor={'#1F272D'}
                value={inputPhonenumber.value}
                onChangeText={text => validatePhonenumber(text)}
              />
            </View>

            <TouchableOpacity onPress={() => loginsubmit()}>
              <LinearGradient
                colors={['#F14647', '#F96D20']}
                style={{
                  borderBottomWidth: 1,
                  borderWidth: 1,
                  height: 48,
                  width: 316,
                  left: 22,
                  borderRadius: 10,
                  top: 185,
                  backgroundColor: '#F14647',
                  borderColor: '#F14647',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#FFFFFF',
                    top: 12,
                  }}>
                  Next
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default SignInScreen;
