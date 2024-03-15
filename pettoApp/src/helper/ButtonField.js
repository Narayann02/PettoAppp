import React from "react";
import {View,TouchableOpacity,Text, StyleSheet,} from 'react-native';


const ButtonField = (props) =>{

    return(

        <View>
            <TouchableOpacity onPress={props.onPress}>
      <View style={{backgroundColor:'#F14647',height:48,width:316,borderRadius:10,left:22}}>
         <Text style={styles.top}>{props.label}</Text>
      </View>
      </TouchableOpacity>

        </View>


    );

};

const styles= StyleSheet.create({
    top:{
        fontSize:16,fontWeight:'500',color:'#FFFFFF',alignSelf:'center',top:12

    }
})

export default ButtonField;