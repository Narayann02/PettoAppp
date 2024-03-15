import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Press = () => {
  return (
    <View style={styles.main}>
      <Pressable
        // onPress={()=>console.warn("normal on press")}
        onLongPress={()=>console.warn("Long on press")}
        onPressIn={()=>console.warn("prees In")}
        onPressOut={()=>console.warn("press out")}

        >
        <Text style={styles.pressatm}>Pressable</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },

  pressatm: {
    backgroundColor: 'blue',
    fontSize: 20,
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});
export default Press;
