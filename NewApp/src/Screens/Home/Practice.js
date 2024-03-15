import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Practice = () => {
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You Reach up anytime via any @narayan.com
      </Text>

      <View style={styles.inputcontainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput style={styles.inputstyle} placeholder="Enter Your Name" />
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.labels}>Enter Your Password</Text>
        <TextInput
          style={styles.inputstyle}
          placeholder="Enter Your Password"
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>

      <Text>please choose your box</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    height: 500,
    marginHorizontal: 50,
    paddingTop: 50,
    backgroundColor: 'aqua',
    marginVertical:80
  },
  mainHeader: {
    fontSize: 30,
    fontWeight: '200',
    paddingTop: 25,
    // color:"#ffff",
    paddingBottom: 15,
  },
  description: {
    fontSize: 15,
    color: 'red',
    paddingBottom: 20,
    lineHeight: 15,
    fontFamily: 'regular',
  },
  inputcontainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    color: 'red',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 5,
    fontFamily: 'regular',
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },
});
export default Practice;
