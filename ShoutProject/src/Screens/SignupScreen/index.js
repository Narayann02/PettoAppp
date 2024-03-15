import React, {useState} from 'react';

import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,Modal,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
// import ButtonField from '../../helper/ButtonField';
// import {DateTimePicker} from '@react-native-community/datetimepicker';
// import {Calendar} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiserviceService from '../../services/Apiservice.service';

const SignUpScreen = ({navigation}) => {
  // const [showmodal, setShowModal] = useState(false);

  const [birth, setbirth] = useState('2001/04/20');

  const [country, setcountry] = useState('India');

  const [name, setname] = useState('');

  const [email, setemail] = useState('');

  const [phonenumber, setphonenumber] = useState('');


  const submitfun = () => {
    let formdata = {
      name: name,
      phone: phonenumber,
      email: email,
      dob: birth,
      country: country,
    };

    let url = 'signup';
    ApiserviceService.Postapi(url,formdata)
      .then(response => {
        console.log('response------>>>>>', response.data);
        if (response.status == true) {
          AsyncStorage.setItem('userID', '' + response.data.id);
          AsyncStorage.setItem('isLogin', '' + 1);
          console.log('otp-------------------',response.data.otp);
          navigation.navigate('OtpVerification', {otp:response.data.otp,type:1});
        } 
      })
      .catch(e => {
        console.log('error---singup------>>>>>', e);
      });
  };

  // const submitfun = () => {
  //   let formdata = {
  //     name: name,
  //     phone: phonenumber,
  //     email: email,
  //     dob: birth,
  //     country: country,
  //   };
  //   console.log('formdata---singup------>>>>>', formdata);

  //   let url = 'signup';
  //   ApiserviceService.Postapi(url, formdata)
  //     .then(response => {
  //       console.log('res---singup------>>>>>', response.data);
  //       if (response.status == true) {
  //       } else {
  //         console.log('The phone has already been taken.');
  //       }
  //     })
  //     .catch(e => {
  //       console.log('error---singup------>>>>>', e);
  //     });
  // };

  return (
    <View>
      <View>
        <View style={{height: '35%'}}>
          <ImageBackground
            style={{height: '100%', width: '100%', position: 'absolute'}}
            source={ImagePath.back_image}></ImageBackground>
        </View>

        <View>
          <ImageBackground
            style={{
              height: 28,
              width: 185,
              alignSelf: 'center',
              marginTop: -185,
            }}
            source={ImagePath.Shout_Out}></ImageBackground>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: '85%',
            height: 550,
            alignSelf: 'center',
            marginTop: -100,
          }}>
          <View style={{marginLeft: 25, marginRight: 25, top: -8}}>
            <Text
              style={{
                color: 'black',
                fontSize: 28,
                fontWeight: 'bold',
                marginTop: 25,
              }}>
              Sign up
            </Text>
            <Text style={{fontSize: 14, marginTop: 4}}>
              Please sign up to your account
            </Text>

            <View>
              <Text style={{fontSize: 12, fontWeight: '400', top: 18}}>
                Name
              </Text>
              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  top: 8,
                  marginLeft: -3,
                }}
                value={name}
                placeholder="Vinson Cooper"
                onChangeText={text => setname(text)}
                placeholderTextColor={'#dddddd'}
              />
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#B7B7B7',
                  marginTop: 3,
                }}
              />
            </View>

            <View>
              <Text style={{fontSize: 12, fontWeight: '400', top: 18}}>
                Email id
              </Text>
              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  top: 8,
                  marginLeft: -3,
                }}
                value={email}
                onChangeText={text => setemail(text)}
                placeholder="vinsoncooper123@gmail.com"
                placeholderTextColor={'#dddddd'}
                keyboardType={'email-address'}
              />
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#B7B7B7',
                  marginTop: 3,
                }}
              />
            </View>

            <View>
              <Text style={{fontSize: 12, fontWeight: '400', top: 18}}>
                Phone number
              </Text>
              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  top: 8,
                  marginLeft: -3,
                }}
                value={phonenumber}
                onChangeText={text => setphonenumber(text)}
                placeholder="+91 98745 63210"
                placeholderTextColor={'#dddddd'}
              />
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#B7B7B7',
                  marginTop: 3,
                }}
              />
            </View>

            <View>
              <Text style={{fontSize: 12, fontWeight: '400', top: 18}}>
                Date of birth
              </Text>

              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  top: 8,
                  marginLeft: -3,
                }}
                // value={date}
                value={birth}
                onChangeText={text => setbirth(text)}
                placeholder="24 June 2000"
                placeholderTextColor={'#dddddd'}
              />
              {/* <TouchableOpacity onPress={() => setShowModal(true)}> */}
              {/* <Modal transparent={true} visible={showmodal}>
                  <Calendar
                    style={{margin: 40, borderRadius: 15, elevation: 6}}
                    onDayPress={Date => {
                      console.log(Date);
                      setShowModal(false);
                    }}
                  />
                </Modal> */}
              <TouchableOpacity>
                <ImageBackground
                  style={{height: 16, width: 16, left: 230, top: -25}}
                  source={ImagePath.Mask_group}></ImageBackground>
              </TouchableOpacity>
              <View></View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#B7B7B7',
                  marginTop: 3,
                  top: -15,
                }}
              />
            </View>
            <View style={{top: -15}}>
              <Text style={{fontSize: 12, fontWeight: '400', top: 18}}>
                Country
              </Text>

              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  top: 8,
                  marginLeft: -3,
                }}
                value={country}
                onChangeText={text => setcountry(text)}

                placeholder="India"
                placeholderTextColor={'#dddddd'}
              />
              <TouchableOpacity>
                <ImageBackground
                  style={{
                    height: 8,
                    width: 14,
                    left: 230,
                    top: -18,
                    color: '#777A7D',
                  }}
                  source={ImagePath.Vector}
                  resizeMode="cover"></ImageBackground>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#B7B7B7',
                  marginTop: 3,
                }}
              />
            </View>
            <View style={{marginTop: 25}}>
              <TouchableOpacity onPress={() => submitfun()}>
                <ImageBackground
                  source={ImagePath.Button_back}
                  imageStyle={{borderRadius: 10}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#ffffff',
                      textAlign: 'center',
                      fontWeight: '600',
                      padding: 18,
                    }}>
                    Sign up
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            alignSelf: 'center',
            position: 'absolute',
            bottom: -26,
            flexDirection: 'row',
          }}>
          <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 14}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                color: '#38AFE7',
                fontWeight: '600',
                fontSize: 14,
                left: 5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SignUpScreen;
