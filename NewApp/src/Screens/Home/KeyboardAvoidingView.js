import { BaseRouter } from '@react-navigation/native';
import React, { useState } from 'react';

import {TextInput, View, Text, StyleSheet,KeyboardAvoidingView,Button, Modal} from 'react-native';

const App = () => {
    const [username,setUsername]=useState("bvbcbvc");
    const[password,setPassword]=useState("");

    const person=()=>{
        console.warn("hello");

    }
  return (

    <Modal>
    <KeyboardAvoidingView behavior='padding'>
    <View style={styles.container}>
      
        <Text style={styles.label}>UserName</Text>
        <TextInput 
        style={styles.main}
        placeholder='Enter Your Name' />
      

      <Text style={styles.label}>Password</Text>
      <TextInput
    style={styles.main}
      placeholder='Enter Your Password' />
    </View>
    <View style={styles.login}>
        <Button  title='Login' onPress={person}/>
    </View>
    </KeyboardAvoidingView>
    </Modal>
  );
};
const styles = StyleSheet.create({
    main:{
        borderRadius:10,
        margin:5,
        padding:5,
        borderWidth:1,
        marginBottom:5,
        
    },
    
    label:{
        fontSize:16,
        marginBottom:1,
        fontWeight:"bold"
    },
    login:{
    
        margin:5,
        padding:15
    }
})

    
export default App;
