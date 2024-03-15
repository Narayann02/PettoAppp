import React from 'react';
import {View,Button,Alert, StyleSheet}from 'react-native';
import style from '../../../style';





 const Twobutton =()=>{
    Alert.alert('alert Tittle','my alert Msg')
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

      const Threeperson=()=>{

        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
      }
  



 

const App =() =>{

    
    return(
        <View style={styles.main}>
<Button   title='2-Button Alert' onPress={Twobutton} />
<Button  title='3-Button Alert' onPress={Threeperson}/>

        </View>

    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    }
})
export default App;