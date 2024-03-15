import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';
import ApiserviceService from '../../services/Apiservice.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const LoginScreen = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [userId, setuserId] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userID', (err, cre) => {
      let userID = JSON.parse(cre);
      setuserId(userID);
    });
  });

  const submitfun = () => {
    let formdata = {
      wanna_login: 1,
      user_id: userId,
      user_name: username,
      password: password,
    };
    console.log('formdata------->>>', formdata);

    const url = 'createIdAndLogin';

    ApiserviceService.Postapi(url, formdata)
      .then(response => {
        console.log('res--------signup------->>>', response.data);

        if (response.status == true) {
          AsyncStorage.setItem('isLogin', '', + 1);
          navigation.navigate('HomeScreen1');
        } else {
          console.log('Please enter correct username and password');
        }
      })
      .catch(e => {
        console.log('error---singup------>>>>>', e);
      });
  }

  return (
    <View>
      <View>
        <ImageBackground
          style={{height: 290, width: '120%'}}
          source={ImagePath.back_image}></ImageBackground>
      </View>

      <View>
        <ImageBackground
          style={{height: 28, width: 183, alignSelf: 'center', marginTop: -190}}
          source={ImagePath.Shout_Out}></ImageBackground>
      </View>

      <View style={{marginTop: -70}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 400,
            width: '85%',
            alignSelf: 'center',
            top: -30,
          }}>
          <View style={{marginTop: 30, marginLeft: 30, marginRight: 30}}>
            <Text style={{color: 'black', fontSize: 25, fontWeight: '500'}}>
              Login
            </Text>
            <Text style={{marginTop: 4, fontSize: 15, color: '#8E9092'}}>
              Please login to your account
            </Text>

            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 13, fontWeight: '400', color: '#8E9092'}}>
                Username
              </Text>
              <TextInput
                placeholder="vinson_cooper_123 "
                placeholderTextColor={'black'}
                value={username}
                onChangeText={text => setusername(text)}
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#B7B7B7',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: -12,
                }}
              />
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 13, fontWeight: '400', color: '#8E9092'}}>
                Password
              </Text>
              <TextInput
                placeholder="**********"
                placeholderTextColor={'black'}
                value={password}
                onChangeText={text => setpassword(text)}
                style={{
                  borderBottomWidth: 1,

                  borderColor: '#B7B7B7',
                  fontSize: 15,

                  fontWeight: 'bold',
                  marginTop: -12,
                }}
              />
            </View>

            <View style={{marginTop: 10, marginLeft: 133}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{color: '#8E9092'}}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 0, marginRight: 0, marginTop: 40}}>
              <TouchableOpacity>
                <ButtonField label={'Login'} submitfun={submitfun} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{alignSelf: 'center', flexDirection: 'row', marginTop: 75}}>
          <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 14}}>
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text
              style={{
                color: '#38AFE7',
                fontWeight: '600',
                fontSize: 14,
                left: 5,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
