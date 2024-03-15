import React from 'react';
import {View, Modal, Button, Text, StyleSheet, transparent} from 'react-native';

const Mdal = () => {
  return (
    <View>
      <Modal transparent={true}>
        <View style={styles.centeredview}>
          <View style={styles.modalview}>
            <Text style={styles.modalview}>hello NrayanSingh</Text>
          </View>
          <Button title="open modal" />
        </View>
        <View />
      </Modal>

      <View style={styles.india}>
        <Button title="Show Modal" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  india: {
    flex:1,
    justifyContent: 'flex-end',
  },
  centeredview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalview: {
    backgroundColor: 'skyblue',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  moidaltext: {
    fontSize: 30,
  },
});

export default Mdal;
