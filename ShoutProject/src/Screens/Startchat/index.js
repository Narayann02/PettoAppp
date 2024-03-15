import React from "react";
import {ImageBackground, Touchable, TouchableOpacity, View,Text, Image} from 'react-native';
import ImagePath from "../../constants/ImagePath";

const Startchat=({navigation})=>{


    return(
        <View>
            <View  style={{backgroundColor:'white',height:94,width:360,}}/>

<TouchableOpacity>
    <ImageBackground 
    style={{height:15,width:15,left:22,top:-48}}
    source={ImagePath.Arrow_left}></ImageBackground>
</TouchableOpacity>

 <View style={{}}>
    <ImageBackground 
    style={{height:30,width:30,top:-70,left:43}}
    source={ImagePath.rachel}></ImageBackground>
    <Text style={{fontSize:12,fontWeight:'500' ,color:'black',left:79,top:-94}}>rachel_lyon_123</Text>
</View>

 <TouchableOpacity onPress={()=>navigation.navigate('Newchatt2')} > 
    <ImageBackground
    style={{width:80,height:30,borderRadius:6,left:236,top:-118}}
    source={ImagePath.Button_back} imageStyle={{borderRadius:7}}>
        <Text style={{fontSize:12,fontWeight:'500',color:'white',alignSelf:'center',top:6}}>Add Friend</Text>
    </ImageBackground>
</TouchableOpacity>

<ImageBackground 
style={{width:3.46,height:15,top:52,left:334,top:-140}}
source={ImagePath.threedout}>

</ImageBackground> 

<View>
    <ImageBackground 
    style={{height:12,width:10.67,left:156,top:-95}}
    source={ImagePath.watch}></ImageBackground>
    <Text style={{fontSize:12,fontWeight:'400',color:'black',left:172,top:-110}}>
        10:30
    </Text>
</View>
<View style={{borderWidth:1,borderBottomWidth:1,backgroundColor:'white',width:316, height:70,left:22,border:1,backgroundColor:'#FFFFFF',borderColor:'#EEEEEE',top:-100}}>
    <ImageBackground
    style={{height:38,width:38,left:14,top:15}}
    source={ImagePath.rachel}></ImageBackground>
    <View style={{left:60,top:-20}}>
<Text style={{fontSize:11,fontWeight:'700',color:'black',top:1}}>
rachel_lyon_123  want</Text>
<Text style={{fontSize:11,fontWeight:'400',color:'black',}}>
to become your friend
</Text>
    </View>

    <View style={{borderBottomWidth:1,borderWidth:1,height:26,width:52,left:195,borderRadius:5,top:-47,backgroundColor:'#38AFE7',backgroundColor:'#38AFE7',borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE'}}>
        <Text style={{fontSize:10, fontWeight:'400',color:'white',alignSelf:'center',top:4}}>Accept</Text>
    </View>

    <View style={{borderBottomWidth:1,borderWidth:1,height:26,width:52,left:255,borderRadius:5,top:-73,backgroundColor:'white',borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE'}}>
        <Text style={{fontSize:10, fontWeight:'400',color:'black',alignSelf:'center',top:4}}>Reject</Text>
    </View>
</View>



<View style={{top:120}}>
    <View style={{backgroundColor:"white",width:316,height:150,left:22,borderRadius:5,border:1,borderColor:'rgba(238, 238, 238, 1)',top:-25,elevation:0}}>
<ImageBackground 
style={{height:34,width:34,left:15,top:20}}
source={ImagePath.rachel}></ImageBackground>
<Text style={{fontSize:16,fontWeight:'700',left:55,color:'black',top:-8}}>rachel_lyon_123,</Text>
    </View>


<View>
    <ImageBackground 
    style={{height:12,width:12,left:38,top:-110}}
    source={ImagePath.logoman}></ImageBackground>
    <Text style={{fontSize:13,fontWeight:'400',color:'black',left:55,top:-125}}>Name is</Text>
    <Text style={{fontSize:13,fontWeight:'600',color:'black',left:108,top:-143}}>Rachel Lyon</Text>

</View>

<View style={{top:-23}}>
    <ImageBackground 
    style={{height:11.92,width:11,left:38,top:-110}}
    source={ImagePath.bag}></ImageBackground>
    <Text style={{fontSize:13,fontWeight:'400',color:'black',left:55,top:-125}}>They’re</Text>
    <Text style={{fontSize:13,fontWeight:'600',color:'black',left:100,top:-143}}>18 y</Text>

</View>

<View style={{top:-47}}>
    <ImageBackground 
    style={{height:12,width:12,left:38,top:-110}}
    source={ImagePath.prethvi}></ImageBackground>
    <Text style={{fontSize:13,fontWeight:'400',color:'black',left:55,top:-125}}>They’re from</Text>
    <Text style={{fontSize:13,fontWeight:'600',color:'black',left:133,top:-143}}>US</Text>

</View>

<View style={{top:-145}}>
    <Image style={{height:33.6,width:33.6,left:22,top:2}} source={ImagePath.rachel}></Image>
    <View style={{height:47.13, width:203.89,borderBottomWidth:1,borderWidth:1,left:64,top:-30,borderBottomRightRadius:30,borderBottomLeftRadius:40,borderTopEndRadius:30,borderBottomColor:'',backgroundColor:10,borderColor:'#EEEEEE',elevation:0}}>
    
        <Text style={{fontSize:12,fontWeight:'400',color:'#878787',alignSelf:'center',top:14,}}>Lorem ipsum dolor sit amet</Text>
        <Text style={{fontSize:8,fontWeight:'400',color:'#BEBEBE',left:220,top:3}}>07:22 AM</Text>
    </View>

</View>


</View>

<View style={{borderBottomWidth:1,borderWidth:1,width:256,height:46,left:22,borderRadius:23,border:1 ,elevation:0,top:-30,borderColor:'rgba(255, 255, 255, 1)',borderBottomColor:'rgba(246, 246, 246, 1)',backgroundColor:'white',elevation:0}}>
<Text style={{fontSize:12,fontWeight:'400',color:'rgba(204, 204, 204, 1)',left:20,top:13}}>Message</Text>

<ImageBackground
style={{height:16,width:21.33,left:192,top:-2}}
source={ImagePath.camera}></ImageBackground>
<ImageBackground 
style={{height:16,width:16,left:222,top:-18}}
source={ImagePath.url}></ImageBackground>
</View>
<View style={{top:-30}}>
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

<View style={{top:-65}}>
    <Text style={{fontSize:12,fontWeight:'400',color:'rgba(232, 147, 207, 1)',left:138}}>Start New Chat</Text>
</View>

        </View>
    )
}
export default Startchat;