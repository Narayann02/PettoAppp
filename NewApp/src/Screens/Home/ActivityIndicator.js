import React, { useState } from 'react';
import {View, ActivityIndicator, StyleSheet, Button} from 'react-native';

const Indicator = () => {

    const [show,setShow]=useState(false);

    const DisplayLoader =()=> {
        setShow(true);

       setTimeout(()=>{
        setShow(true)
       },5);
}

  return (
    <View style={styles.main}>
      <ActivityIndicator size={100} color="red" animating={show} />
{/* { */}
       {/* show ? <ActivityIndicator  size='100' color='red' />:null */}
{/* } */}
      <Button title="classLoader" onPress={DisplayLoader} />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Indicator;
