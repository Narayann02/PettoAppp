import React from "react";
import { Image ,View,Text, ImageBackground, Touchable, TouchableOpacity} from 'react-native';
import ImagePath from "../../../constants/ImagePath";


const IntroScreen1 = () =>{

    return(
        <View  style={{backgroundColor:'white',width:('100%'),height:('100%')}}>
            <View>
                <Image 
                style={{height:417,width:315,left:23,top:40}}
                source={ImagePath.dog}/>
                
                <Text style={{fontSize:14,fontWeight:'700',color:'#1F272D',top:-390,left:309}}>Skip</Text>

            </View>


<View style={{left:21,top:50}}>
<Text style={{fontSize:28,fontWeight:'700',color:'#1F272D'}}>We deliver pet products 
across Bangalore.</Text>
</View>

<View style={{left:21,top:60,marginRight:30}}>
    <Text style={{fontSize:14,fontWeight:'400',color:'#888888',}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</Text>
</View>


<View style={{top:-10}}>
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


<View style={{top:-10
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

export default IntroScreen1;