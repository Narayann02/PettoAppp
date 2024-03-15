import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ApiserviceService from '../../services/Apiservice.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonField from '../../helper/ButtonField';

const ChangePassword = ({navigation}) => {
  const [userId, setuserId] = useState('');
  const [password, setpassword] = useState('');
  const [new_password, setnew_password] = useState('');
  const [cpassword, setcpassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userID', (err, cre) => {
      let userID = JSON.parse(cre);
      setuserId(userID);
    });
  }, []);

  const submitfun = () => {
    let formdata = {
      user_id: userId,
      new_password: new_password,
      password: password,
      confirm_password: cpassword,
    };
    console.log('formdata------>>>', formdata);
    let url = 'changePassword';
    ApiserviceService.Postapi(url, formdata)
      .then(response => {
        console.log('response------->>>', response);

        if (response.status == true) {
          console.log('response---->>', response);
          navigation.navigate('Setting');
        }
      })
      .catch(e => {
        console.log('error---->>', e);
      });
  };

  return (
    <View>
      <ImageBackground
        style={{height: 15, width: 15, left: 22, top: 44}}
        source={ImagePath.Arrow_left}></ImageBackground>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: 'black',
          left: 45.37,
          top: 25,
        }}>
        Change Password
      </Text>

      <View style={{marginTop: -30}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#777A7D',
            left: 22,
            top: 85,
          }}>
          Old password
        </Text>
        <View
          style={{
            height: 50,
            width: 316,
            borderBottomWidth: 1,
            borderWidth: 1,
            left: 22,
            top: 90,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '500', color: 'black', left: 20}}
            placeholder="* * * * * * * * * "
            onChangeText={text=>setpassword(text)}
            value={password}
          />
        </View>
      </View>

      <View style={{marginTop: 25}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#777A7D',
            left: 22,
            top: 85,
          }}>
          New password
        </Text>
        <View
          style={{
            height: 50,
            width: 316,
            borderBottomWidth: 1,
            borderWidth: 1,
            left: 22,
            top: 90,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '500', color: 'black', left: 20}}
            placeholder="* * * * * * * * * * * *"
            onChangeText={text=>setnew_password(text)}
            value={new_password}
          />
        </View>
      </View>

      <View style={{marginTop: 25}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#777A7D',
            left: 22,
            top: 85,
          }}>
          Confirm password
        </Text>
        <View
          style={{
            height: 50,
            width: 316,
            borderBottomWidth: 1,
            borderWidth: 1,
            left: 22,
            top: 90,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{fontSize: 14, fontWeight: '500', color: 'black', left: 20}}
            placeholder=" * * * * * * * * * * * * "
            onChangeText={text=>setcpassword(text)}
            value={cpassword}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{ top: '30%',padding:20}}
        onPress={() => navigation.navigate(submitfun)}>
        {/* <ImageBackground
          style={{
            height: 50,
            width: 316,
            left: 22,
            borderRadius: 4,
            backgroundColor: '#EEEEEE',
            borderRadius: 10,
          }}
          source={ImagePath.Button_back}
          imageStyle={{borderRadius: 7}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: 'white',
              alignSelf: 'center',
              top: 15,
            }}>
            Update
          </Text>
        </ImageBackground> */}
        <ButtonField  label={'Update'} submitfun={submitfun}/>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;
