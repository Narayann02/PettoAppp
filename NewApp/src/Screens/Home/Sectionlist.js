//SectionList

import React from "react";
import {SectionList,Text,View,StyleSheet} from 'react-native'

const person = [

  {
    name:'annu',
    data:['php','java','kotlin']

  },

   {
name:'shiv',
data:['bhaole','naveen','golu']

   },
   
   {
    name:'narayan',
    data:['softwarer','ghs','rimmi']

   },

  
];

const List = () =>{

  return(
    <View>
    <SectionList

    sections={person}
    
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => (
      <View style={styles.flex}>
        <Text style={styles.title}>{item}</Text>
      </View>
    )}

  
    renderSectionHeader={({section:{name}})=>(<Text style={styles.box}>{name}</Text>)}
  
    />

</View>
  )  
}

const styles = StyleSheet.create({
box:{
  fontSize:20,
  borderWidth:2,
  padding:2,
  backgroundColor:'red'
},
flex:{
  
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    

}




})


export default List;
