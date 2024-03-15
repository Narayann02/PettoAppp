import React from "react";
import {Image, View,Text,TouchableOpacity,ImageBackground} from'react-native';
import ImagePath from "../../../constants/ImagePath";

const IntroScreen3 = ()=>{


    return(
        <View>
            <Image 
            style={{height:476,width:360,top:-25}}
            
            source={ImagePath.reddog}/>

            <View style={{left:309,top:-440}}>
                <Text style={{fontSize:14,fontWeight:'700',color:'#2D2E43',}}>Skip</Text>
            </View>


<View style={{left:21,marginRight:120}}>
    <Text style={{fontSize:28,fontWeight:'700',color:'#1F272D',top:-10}}>
    Best products 
better service.
    </Text>
</View>

<View style={{left:21,marginRight:50}}>
    <Text style={{fontSize:14,fontWeight:'400',color:'#888888'}}>
    Purchase our 100% natural products—an ideal, healthier alternative for both pets and their owners.
    </Text>
</View>


<View>
    
<View style={{top:35}}>
<TouchableOpacity>
        <View style={{borderBottomWidth:1,borderWidth:1,height:48, width:48,borderRadius:100,left:19,top:10,borderBottomColor:'#ECEDFA',borderColor:'#ECEDFA',}}>
            <Image 
            style={{height:21,width:20,alignSelf:'center',top:12}}
            source={ImagePath.left}/>
        </View>
        </TouchableOpacity>
      </View>


      
<View style={{top:-136}}>
    <Image 
    style={{height:10,width:10,left:146,top:150}}
    source={ImagePath.whitecircle}/>


<Image 
    style={{height:10,width:10,left:168,top:140,}}
    source={ImagePath.whitecircle}/>


<Image 
    style={{height:12,width:12,left:188,top:130,}}
    source={ImagePath.smallcircle}/>
</View>






<View style={{top:-100
}}>
    <TouchableOpacity>
    <View
    style={{borderBottomWidth:1,borderWidth:1,height:48, width:48,borderRadius:100,left:292,top:64,borderBottomColor:'#ECEDFA',borderColor:'#ECEDFA',backgroundColor:'#F96D20'}}>
      <Image 
            style={{height:21,width:20,alignSelf:'center',top:12}}
            source={ImagePath.auro}/>
    </View>
    </TouchableOpacity>
</View>
</View>



        </View>


    );
};
export default IntroScreen3;

