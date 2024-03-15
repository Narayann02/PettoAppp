import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiserviceService from '../../services/Apiservice.service';
import {useScrollToTop} from '@react-navigation/native';

const CreateAccount = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [userId, setuserId] = useState('');
  console.log('user id------->',userId)
  const [cpassword, setcpassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userID', (err, cre) => {
      let userID = JSON.parse(cre);
      setuserId(userID);
    });
  },[]);

  const submitfun = () => {
    let formdata = {
      user_id: userId,
      user_name: username,
      password: password,
      confirm_password: cpassword,
      gender: 1,
    };
    // console.log('formdata-------------->>>', formdata);

    let url = 'createIdAndLogin';
    ApiserviceService.Postapi(url, formdata)
      .then(response => {
        console.log('response---------s---->', response);

        if (response.status == true) {
          navigation.navigate('LoginScreen');
        }
      })
      .catch(e => {
        console.log('error------singup-------->>>', e);
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
              width: 183,
              marginTop: '-45%',
            }}
            source={ImagePath.Shout_Out}
            resizeMode="cover"></ImageBackground>
          <View style={{marginTop: '30%'}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 28}}>
              Create Account
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 15}}>
              Lorem ipsum dolor sit consectetur
            </Text>
          </View>
          <View style={{marginTop: 40}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 13}}>
              Username
            </Text>
          </View>
          <View style={{marginTop: -10}}>
            <TextInput
             value={username}
              style={{color: 'black', fontSize: 13, marginLeft: -4}}
              placeholder="vinson_cooper_123"
              placeholderTextColor={'#817878'}
              onChangeText={text => setusername(text)}
             
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#B7B7B7',
              marginTop: -5,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 13}}>
              Password
            </Text>
          </View>
          <View style={{marginTop: -10}}>
            <TextInput
              style={{color: 'black', fontSize: 13, marginLeft: -4}}
              secureTextEntry
              placeholder="*********"
              placeholderTextColor={'#817878'}
              value={password}
              onChangeText={text => setpassword(text)}
             
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#B7B7B7',
              marginTop: -5,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 13}}>
              Confirm password
            </Text>
          </View>
          <View style={{marginTop: -10}}>
            <TextInput
              style={{color: 'black', fontSize: 13, marginLeft: -4}}
              secureTextEntry
              placeholder="*********"
              placeholderTextColor={'#817878'}
              value={cpassword}
              onChangeText={text => setcpassword(text)}
             
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#B7B7B7',
              marginTop: -5,
            }}
          />
          <View style={{marginTop: 25, marginBottom: 20}}>
            <ButtonField label={'Verify'} submitfun={submitfun} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CreateAccount;
