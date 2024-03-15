
import React, { useState } from 'react';
import {StatusBar, View,Button, StyleSheet} from 'react-native';

const App = () => {

  const[hide,setHide]=useState(false);
  const[barStyle,setBarstyle]=useState("default");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="orange" barStyle={barStyle} hidden={hide} />

      <Button  title='Toggle Status Bar' onPress={()=>setHide(!hide)}/>
      <Button  title='style Bar'  onPress={()=>setBarstyle("dark-content")} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    justifyContent:'center'

  }
})
export default App;
