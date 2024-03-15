import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const AsyncStorageScreen = () => {

  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('user', 'bhole');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    // console.warn(name);
    setUser(name);
  };

  const removeData = async () => {
    const name = await AsyncStorage.removeItem('user');
    setUser('');
  };

  return (
    <View style={{}}>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>
        Reactnative AsyncStorage |{user}
      </Text>
      <View style={{margin: 10}}>
        <Button title="SetData" onPress={setData} />
        <Button title="GetData" onPress={getData} />
        <Button title="RemoveData" onPress={removeData} />
      </View>
    </View>
  );
};

export default AsyncStorageScreen;
