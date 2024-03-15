import React from 'react';
import {View, ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';

const ForgotPassword = ({navigation}) => {

  
  
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
              width: 180,
              marginTop: '-45%',
            }}
            source={ImagePath.Shout_Out}
            resizeMode="cover"></ImageBackground>
          <View style={{marginTop: '33%'}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 28}}>
              Forgot Password
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 15}}>
              Lorem ipsum dolor sit consectetur
            </Text>
          </View>
          <View style={{marginTop: 40}}>
            <Text style={{color: '#777A7D', fontWeight: '400', fontSize: 13}}>
              Phone number
            </Text>
          </View>
          <View style={{marginTop: -10}}>
            <TextInput 
              style={{color: 'black', fontSize: 13, marginLeft: -4}}
              placeholder="+91 98745 63210"
              placeholderTextColor={'black'}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#B7B7B7',
              marginTop: -5,
            }}
          />
          <View style={{marginTop: 50, marginBottom: 50}} >
            <TouchableOpacity  >
            <ButtonField label={'Send'}  onPress={() => navigation.navigate('OtpVerification')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ForgotPassword;
