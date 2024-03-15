import React from 'react';
import {Image, View, Text,TouchableOpacity,ImageBackground} from 'react-native';
import ImagePath from '../../../constants/ImagePath';

const IntroScreen2 = () => {
  return (
    <View>
      <View>
        <Image style={{height:470, width:360,}} source={ImagePath.cat} />
        <View style={{left: 309, top: -440}}>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#2D2E43'}}>
            Skip
          </Text>
        </View>
      </View>

      <View style={{backgroundColor: '', left: 21,marginRight:90,}}>
        <Text style={{fontSize: 28, fontWeight: '700', color: '#1F272D'}}>
          Nutrients for your pet to thrive.
        </Text>
      </View>
      <View style={{left:21,marginRight:35,top:8}}>
        <Text style={{fontSize:14,fontWeight:'400',color:'#888888'}}>
          In our pet food, you'll find a variety of protein sources such as
          chicken, beef, lamb, and fish, as well as plant-based options like
          grains and soy.
        </Text>
      </View>


      <View style={{top:35}}>
<TouchableOpacity>
        <View style={{borderBottomWidth:1,borderWidth:1,height:48, width:48,borderRadius:100,left:19,top:10,borderBottomColor:'#ECEDFA',borderColor:'#ECEDFA',}}>
            <Image 
            style={{height:21,width:20,alignSelf:'center',top:10}}
            source={ImagePath.left}/>
        </View>
        </TouchableOpacity>
      </View>


      
<View style={{top:-136}}>
    <Image 
    style={{height:12,width:12,left:146,top:150}}
    source={ImagePath.smallcircle}/>


<Image 
    style={{height:10,width:10,left:168,top:140,}}
    source={ImagePath.whitecircle}/>


<Image 
    style={{height:10,width:10,left:188,top:130,}}
    source={ImagePath.whitecircle}/>
</View>






<View style={{top:-136
}}>
    <TouchableOpacity>
    <ImageBackground 
    style={{height:48,width:48,left:288,top:100}}
    source={ImagePath.bigcircle}>
    <Image  
    style={{height:20,width:20,left:13,top:13,}}
    
    source={ImagePath.auro}/>
    </ImageBackground>
    </TouchableOpacity>
</View>
    </View>
  );
};
export default IntroScreen2;
