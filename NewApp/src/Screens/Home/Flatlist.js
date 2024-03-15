// // import React, {useState} from 'react';
// // import {
// //   FlatList,
// //   SafeAreaView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// // } from 'react-native';

// // const DATA = [
// //   {
// //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
// //     title: 'First Item',
// //   },
// //   {
// //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
// //     title: 'Second Item',
// //   },
// //   {
// //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
// //     title: 'Third Item',
// //   },
// // ];

// // const Item = ({item, onPress, backgroundColor, textColor}) => (
// //   <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
// //     <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
// //   </TouchableOpacity>
// // );

// // const App = () => {
// //   const [selectedId, setSelectedId] = useState();

// //   const renderItem = ({item}) => {
// //     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
// //     const color = item.id === selectedId ? 'white' : 'black';

// //     return (
// //       <Item
// //         item={item}
// //         onPress={() => setSelectedId(item.id)}
// //         backgroundColor={backgroundColor}
// //         textColor={color}
// //       />
// //     );
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <FlatList
// //         data={DATA}
// //         renderItem={renderItem}
// //         keyExtractor={item => item.id}
// //         extraData={selectedId}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     marginTop: StatusBar.currentHeight || 0,
// //   },
// //   item: {
// //     padding: 20,
// //     marginVertical: 8,
// //     marginHorizontal: 16,
// //   },
// //   title: {
// //     fontSize: 32,
// //   },
// // });

// // export default App;

// import React from "react";
// import {View,Text,FlatList} from 'react-native';

// const user = [

// {
//   id:1,
//   name:'aman'
// },
// {
//   id:2,
//   name:'narayan'
// },
// {
//   id:3,
//   name:'sager'
// },
// {
//   id:4,
//   name:'arjun'
// },
// {
//   id:5,
//   name:'advk'
// },

// ]
// const App =()=>{

//   return(
//     <View>
//     <FlatList 
//     data ={user}
//     renderItem={({item})=><Text>(item.name)</Text>}
//     />
// </View>
//   );
// }
// export default App;