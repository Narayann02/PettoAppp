import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';
import OTPTextView from 'react-native-otp-textinput';
import ApiserviceService from '../../services/Apiservice.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpVerification = (props, route) => {
  const pagetype = props.route.params.type;
  const otpInput = useRef(null);

  const otp = props.route.params.otp;
  console.log('routw--------------', props.route.params.otp);

  const [userId, setuserId] = useState('');
  const [inputotp, setinputotp] = useState({
    otp: null,
    message: '',
    isValid: true,
  });
  const [inputfield,setinputfield] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('userID', (err, cre) => {
      let userID = JSON.parse(cre);
      setuserId(userID);
    });
  });

  const submitfun = () => {
    let formdata = {
      user_id: userId,
      otp:inputfield,
    };
    console.log('formdata--------->>>', formdata);

    let url = 'matchOtp';
    ApiserviceService.Postapi(url, formdata)
      .then(response => {
        console.log('res---matchOtp------>>>>>', response.data);
        if (response.status == true) {
          props.navigation.navigate('GenderScreen');
        } 

      })
      .catch(e => {
        console.log('error', e);
      });
  };

  return (
    <View>
      <View style={{height: '40%'}}>
        <ImageBackground
          style={{height: '100%', position: 'absolute', width: '100%'}}
          source={ImagePath.back_image}
          resizeMode="cover"></ImageBackground>
      </View>

      <View style={{height: '60%', backgroundColor: 'white'}}>
        <View
          style={{
            width: '85%',
            height: '76%',
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: '-35%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            borderRadius: 3,
            padding: 30,
            position: 'absolute',
          }}>
          <ImageBackground
            style={{
              alignSelf: 'center',
              height: 28,
              width: 180,
              marginTop: '-45%',
            }}
            source={ImagePath.Shout_Out}
            resizeMode="cover"></ImageBackground>
          <View style={{marginTop: '33%'}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 28}}>
              OTP Verification
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 15}}>
              We've the send the verification
            </Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: '600', marginTop: 5}}>
              +98745 63210 otp is {otp}
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <View>
              <OTPTextView
                 ref={(e) => (otpInput.current = e)}
                containerStyle={{marginBottom: 30}}
                textInputStyle={{
                  borderRadius: 10,
                  borderWidth: 2,
                  borderBottomWidth: 2,

                  borderColor: '#000000',
                  color: '#000000',
                  backgroundColor: '#EEEEEE',
                }}
                handleTextChange={(text) => { otpInput.current = text; setinputfield(text) }}

              />
            </View>
            <View style={{marginTop: -10}}>
              <ButtonField label={'verify'} submitfun={submitfun} />
            </View>

            <View
              style={{
                marginTop: '85%',
                alignSelf: 'center',
                position: 'absolute',
                flexDirection: 'row',
                marginTop: 180,
              }}>
              <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 14}}>
                Don’t receive OTP?
              </Text>

              <View>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('OtpVerification')}>
                  <Text
                    style={{
                      color: '#38AFE7',
                      fontWeight: '600',
                      fontSize: 14,
                      left: 5,
                    }}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OtpVerification;

//   const pagetype = props.route.params.type;

//   console.log('routw--------------', props.route.params.otp);

//   const [userid, setuserid] = useState('');
//   const [inputotp, setinputotp] = useState({
//     otp: null,
//     message: '',
//     isValid: true,
// });

//   useEffect(() => {
//     AsyncStorage.getItem('userID', (err, cre) => {
//       let userID = JSON.parse(cre);
//       setuserid(userID);
//     });
//   });

//   const submitfun = () => {
//     let formdata = {
//       userID: userid,
//       otp: Number(inputotp.otp),
//     };

//     let url = 'matchOtp';
//     ApiserviceService.Postapi(url, formdata)
//       .then(reponse => {
//         console.log('formdata--------->>>', reponse);

//         if (reponse.status == true) {
//           if (pagetype == 1) {
//             props.navigation.navigate('GenderScreen');
//           } else {
//             props.navigation.navigate('ResetPassword');
//           }
//         }
//       })
//       .catch(e => {
//         console.log('error', e);
//       });
//   const otp = props.route.params.otp;
//   const pagetype = props.route.params.type;

//   console.log('routw--------------', props.route.params.otp);

//   const [userid, setuserid] = useState('');
//   const [inputotp, setinputotp] = useState({
//     otp: null,
//     message: '',
//     isValid: true,
// });

//   useEffect(() => {
//     AsyncStorage.getItem('userID', (err, cre) => {
//       let userID = JSON.parse(cre);
//       setuserid(userID);
//     });
//   });

//   const submitfun = () => {
//     let formdata = {
//       userID: userid,
//       otp: Number(inputotp.otp),
//     };

//     let url = 'matchOtp';
//     ApiserviceService.Postapi(url, formdata)
//       .then(reponse => {
//         console.log('formdata--------->>>', reponse);

//         if (reponse.status == true) {
//           if (pagetype == 1) {
//             props.navigation.navigate('GenderScreen');
//           } else {
//             props.navigation.navigate('ResetPassword');
//           }
//         }
//       })
//       .catch(e => {
//         console.log('error', e);
//
// }
