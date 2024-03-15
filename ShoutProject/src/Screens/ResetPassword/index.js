import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text, TextInput} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPassword = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [userId, setuserId] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userID', (err, cre) => {
      let userID = JSON.parse(cre);
      setuserId(userID);
    });
  });

  const submitfun = () => {
    navigation.navigate('LoginScreen');
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
              Reset password
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 15}}>
              Set the new password for your account
            </Text>
          </View>
          <View style={{marginTop: 30}}>
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
              onChangeText={text => setpassword(text)}
              value={password}
              // onChange={text=setuserid(text)}
              // value={password}
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
              onChangeText={text => setcpassword(text)}
              value={cpassword}
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
            <ButtonField label={'Reset password'} submitfun={submitfun} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
