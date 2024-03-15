import React from "react";
import {View,ImageBackground,TouchableOpacity,Text, Image} from 'react-native'
import ImagePath from "../../constants/ImagePath";

const Newchatt2 =({navigation})=>{

    return(
      
<View style={{width:'100%',height:'100%'}}>

        <View  style={{height:94,width:360,borderWidth:1, backgroundColor:'#F0F0F0',borderColor:'#D9D9D9',}}/>

<TouchableOpacity>
<ImageBackground 
style={{height:15,width:15,left:22,top:-40}}
source={ImagePath.Arrow_left}></ImageBackground>
</TouchableOpacity>

<View style={{top:13}}>
<ImageBackground 
style={{height:30,width:30,top:-75,left:43}}
source={ImagePath.rachel}></ImageBackground>
<Text style={{fontSize:12,fontWeight:'500' ,color:'black',left:79,top:-100}}>Savannah Wawn</Text>
</View>




<View style={{top:30,}}>

    <ImageBackground 
    style={{height:12,width:10.67,left:156,top:-80}}
    source={ImagePath.watch}></ImageBackground>
    <Text style={{fontSize:12,fontWeight:'400',color:'black',left:172,top:-95}}>
        10:30
    </Text>    
</View> 
<View>
    <TouchableOpacity onPress={()=>navigation.navigate('Endchat')}
    style={{height:45,width:140,borderBottomWidth:1,borderWidth:1,borderRadius:0,border:1,left:198,top:-135,backgroundColor:'white',borderBottomColor:'#D9D9D9',borderColor:'#D9D9D9'}}
 >
    <Image  style={{height:18,width:18,top:11,left:27}} source={ImagePath.endchate}/>
    <Text style={{fontSize:12,fontWeight:'400',color:'black',left:50,top:-6}}>End Chat</Text>
 </TouchableOpacity>


 <View
    style={{height:45,width:140,borderBottomWidth:1,borderWidth:1,borderRadius:0,border:1,left:198,top:-135,backgroundColor:'white',borderBottomColor:'#D9D9D9',borderColor:'#D9D9D9'}}
 >
    <Image  style={{height:22,width:22, top:10,left:27}} source={ImagePath.blockr}/>
    <Text style={{fontSize:12,fontWeight:'400',color:'black',left:50,top:-9}}>Report</Text>
 </View>
</View>


<View style={{top:280}}>
    <Image style={{height:33.6,width:33.6,left:23,top:4}} source={ImagePath.rachel}></Image>
    <View style={{height:47.13, width:203.89,borderBottomWidth:1,borderWidth:1,left:64,top:-30,borderBottomRightRadius:30,borderBottomLeftRadius:40,borderTopEndRadius:30,borderBottomColor:'#F0F0F0',backgroundColor:10,borderColor:'#F0F0F0'}}>
    
    <Text style={{fontSize:12,fontWeight:'400',color:'#878787',alignSelf:'center',top:14,}}>Lorem ipsum dolor sit amet</Text>
    <Text style={{fontSize:8,fontWeight:'400',color:'#BEBEBE',left:220,top:3}}>07:22 AM</Text>
</View>

</View>




<View style={{borderBottomWidth:1,borderWidth:1,width:256,height:46,left:22,borderRadius:23,border:1 ,elevation:0,top:275,borderColor:'rgba(255, 255, 255, 1)',borderBottomColor:'rgba(246, 246, 246, 1)',backgroundColor:'white',}}>
<Text style={{fontSize:12,fontWeight:'400',color:'rgba(204, 204, 204, 1)',left:20,top:13}}>Message</Text>

<ImageBackground
style={{height:16,width:21.33,left:192,top:-2}}
source={ImagePath.camera}></ImageBackground>
<ImageBackground 
style={{height:16,width:16,left:222,top:-18}}
source={ImagePath.url}></ImageBackground>
</View>
<View style={{top:275}}>
    <ImageBackground 
    style={{height:46,width:46,borderRadius:23,left:292,top:-46}}
    source={ImagePath.bluegola}>
        <TouchableOpacity>
        <ImageBackground
        style={{height:20,width:12.5,alignSelf:'center',top:13}}
        source={ImagePath.speaker}></ImageBackground>
        </TouchableOpacity>

    </ImageBackground>
    <View style={{top:-30}}>
    <Text style={{fontSize:12,fontWeight:'400',color:'rgba(232, 147, 207, 1)',left:138}}>Start New Chat</Text>
</View>


</View>

</View>


    

    )
}
export default Newchatt2;