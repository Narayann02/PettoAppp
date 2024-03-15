import React from 'react';
import {ImageBackground, Text, Touchable, TouchableOpacity, View} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const GenderScreen = ({navigation}) => {

  const submitfun = ()=>{

    navigation.navigate('CreateAccount');
  }
  return (
    <View>
      <View style={{height: '100%'}}>
        <ImageBackground
          style={{height: '100%', width: '100%', position: 'absolute'}}
          source={ImagePath.back_image}></ImageBackground>

        <View
          style={{alignSelf: 'baseline', marginTop: '50%', marginLeft: '10%'}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 22}}>
            Gender
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              margin: 3,
              fontWeight: '400',
            }}>
            Please select your gender
          </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:30,marginLeft:28}}>
       <TouchableOpacity onPress={submitfun}>
          <ImageBackground
            style={{height:150 , width: 150,}}
            source={ImagePath.boy_one}>
            <Text style={{fontSize:15,color:'white',marginTop:'70%',marginLeft:60,fontWeight:'600',}}>Boy</Text>
          </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity onPress={submitfun}>
          <ImageBackground
            style={{height:150 , width: 150,}}
            source={ImagePath.girl_one}>
              <View style={{marginTop:105}}>
            <Text style={{fontSize:15,color:'white',fontWeight:'600',textAlign:'center'}}>Girl</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>

        </View>
                        
                        
        </View>
      </View>
      
   
  );
};
export default GenderScreen;
