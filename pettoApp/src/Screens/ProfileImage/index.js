import React from 'react';
import {View, Image, Text, Touchable, TouchableOpacity} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';

const ProfileImage = ({navigation}) => {
  return (
    <View style=
    {{backgroundColor:'white',height:'100%'}}>
      <View style={{top: 50}}>
        <Image
          style={{height: 70.39, width: 80, left: 135}}
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
          Complete your profile
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
          Add your latest photo to complete you profile
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 145,
            height: 145,
            alignSelf: 'center',
            top:100,
            borderColor: '#F5F5F5',
          }}
          source={ImagePath.perso}
          imageStyle={{backgroundColor:'#F5F5F5'}}
          
        />
      </View>

      <TouchableOpacity style={{marginTop:130}} >
        <ButtonField label={'Next'} onPress={()=>navigation.navigate('OtpVerification')} />
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:'center',margin:15}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'#9D9D9D'}}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImage;
