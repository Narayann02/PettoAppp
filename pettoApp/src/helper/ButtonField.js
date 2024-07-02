import React from "react";
import {View,TouchableOpacity,Text, StyleSheet,} from 'react-native';
import LinearGradient from "react-native-linear-gradient";


const ButtonField = (props) =>{

    return(

        <View>
            <TouchableOpacity onPress={props.onPress}>
      <LinearGradient style={{height:48,width:316,borderRadius:10,left:22}}>
        colors={['#F96D20','#F14647']}
         <Text style={styles.top}>{props.label}</Text>
      </LinearGradient>
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