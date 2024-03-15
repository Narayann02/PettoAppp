import React from "react";
import {ImageBackground, Touchable, TouchableOpacity, View,Text} from 'react-native';
import ImagePath from "../../constants/ImagePath";

const Newchat=({navigation})=>{


    return(
        <View>
            <View  style={{backgroundColor:'white',height:94,width:360,}}/>

<TouchableOpacity>
    <ImageBackground 
    style={{height:15,width:15,left:22,top:-45}}
    source={ImagePath.Arrow_left}></ImageBackground>
</TouchableOpacity>

 <View style={{}}>
    <ImageBackground 
    style={{height:30,width:30,top:-68,left:43}}
    source={ImagePath.EricaBrewster}></ImageBackground>
    <Text style={{fontSize:12,fontWeight:'500' ,color:'black',left:79,top:-92}}>rachel_lyon_123</Text>
</View>

 <TouchableOpacity onPress={()=>navigation.navigate('Startchat')} > 
    <ImageBackground
    style={{width:80,height:30,left:236,top:-116}}
    source={ImagePath.Button_back} imageStyle={{borderRadius:6}}>
        <Text style={{fontSize:12,fontWeight:'500',color:'white',alignSelf:'center',top:6}}>Add Friend</Text>
    </ImageBackground>
</TouchableOpacity>

<ImageBackground 
style={{width:3.60,height:15,top:52,left:334,top:-138}}
source={ImagePath.threedout}>

</ImageBackground> 



<View style={{top:-30}}>
    <View style={{backgroundColor:"white",width:316,height:150,left:22,borderRadius:5,border:1,borderColor:'rgba(238, 238, 238, 1)',top:-25,elevation:0}}>
<ImageBackground 
style={{height:34,width:34,left:20,top:20}}
source={ImagePath.EricaBrewster}></ImageBackground>
<Text style={{fontSize:16,fontWeight:'700',left:60,color:'black',top:-8}}>rachel_lyon_123,</Text>
    </View>


<View>
    <ImageBackground 
    style={{height:12,width:12,left:43,top:-110}}
    source={ImagePath.logoman}></ImageBackground>
    <Text style={{fontSize:13,fontWeight:'400',color:'black',left:63,top:-125}}>Name is</Text>
    <Text style={{fontSize:13,fontWeight:'600',color:'black',left:116,top:-143}}>Rachel Lyon</Text>

</View>

<View style={{top:-23}}>
    <ImageBackground 
    style={{height:11.92,width:11,left:43,top:-110}}
    source={ImagePath.bag}></ImageBackground>
    <Text style={{fontSize:13,fontWeight:'400',color:'black',left:63,top:-125}}>They’re</Text>
    <Text style={{fontSize:13,fontWeight:'600',color:'black',left:108,top:-143}}>18 y</Text>

</View>

<View style={{top:-47}}>
    <ImageBackground 
    style={{height:12,width:12,left:43,top:-110}}
    source={ImagePath.prethvi}></ImageBackground>
    <Text style={{fontSize:13,fontWeight:'400',color:'black',left:63,top:-125}}>They’re from</Text>
    <Text style={{fontSize:13,fontWeight:'600',color:'black',left:140,top:-143}}>US</Text>

</View>


</View>

<View style={{borderBottomWidth:1,borderWidth:1,width:256,height:46,left:22,borderRadius:23,border:1 ,elevation:0,top:145,borderColor:'rgba(255, 255, 255, 1)',borderBottomColor:'rgba(246, 246, 246, 1)',backgroundColor:'white',elevation:0}}>
<Text style={{fontSize:12,fontWeight:'400',color:'rgba(204, 204, 204, 1)',left:20,top:13}}>Message</Text>

<ImageBackground
style={{height:16,width:21.33,left:192,top:-2}}
source={ImagePath.camera}></ImageBackground>
<ImageBackground 
style={{height:16,width:16,left:222,top:-18}}
source={ImagePath.url}></ImageBackground>
</View>
<View style={{top:145}}>
    <ImageBackground 
    style={{height:46,width:46,borderRadius:23,left:292,top:-46}}
    source={ImagePath.bluegola}>
        <TouchableOpacity>
        <ImageBackground
        style={{height:20,width:12.5,alignSelf:'center',top:13}}
        source={ImagePath.speaker}></ImageBackground>
        </TouchableOpacity>
    </ImageBackground>
</View>

<View style={{top:110}}>
    <Text style={{fontSize:12,fontWeight:'400',color:'rgba(232, 147, 207, 1)',left:138}}>Start New Chat</Text>
</View>

        </View>
    )
}
export default Newchat;