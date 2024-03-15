import React from 'react';
import {View, ImageBackground, Image,Text, TouchableOpacity} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';



const OrderConfirm = ({navigation}) => {
  return (
    
    <View style={{backgroundColor: 'white', flex: 1,}}>

        <TouchableOpacity style={{alignSelf:'center',padding:60}}>
            <ImageBackground  
            style={{width:207,height:192}}
            source={ImagePath.Group791}>

                <Image  
                style={{height:125,width:124,alignSelf:'center',top:40}}
                source={ImagePath.Group790}/>

            </ImageBackground>
        </TouchableOpacity>


        <View style={{left:55,top:-10}}>
            <Text style={{fontSize:20,fontWeight:'700',color:'#000000'}}>Order Placed Successfully</Text>
        </View>

        <View style={{left:35,width:316,top:0}}>
            <Text style={{fontSize:14,fontWeight:'400',color:'#9D9D9D0'}}>Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s.
</Text>
        </View>


     <View style={{marginTop:35}}>
<ButtonField  label={'Order Details'} onPress={()=>{navigation.navigate('SettingScreen')}}/>
</View>    
    

<View style={{alignSelf:'center',margin:15}}>
    <Text style={{fontSize:14,fontWeight:'400',color:'#000000'}}>
    Back to home
    </Text>
</View>


    
        </View>

        )
        }

        export default OrderConfirm;