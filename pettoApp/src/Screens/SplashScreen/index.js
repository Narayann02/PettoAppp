import React from 'react';
import {View, ImageBackground} from 'react-native';
import ImagePath from '../../../constants/ImagePath';

const SplashScreen = () => {
  return (
    <View>
      <View style={{backgroundColor: '#F96D20', width: '100%', height: '100%'}}>
        <ImageBackground

        style={{height:143,width:170,left:108,top:270}}
          source={ImagePath.petto} resizeMode='cover'>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SplashScreen;
