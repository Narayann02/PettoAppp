// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  */



// // import React from 'react';
// // import type {PropsWithChildren} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({children, title}: SectionProps): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// // function App(): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// //         backgroundColor={backgroundStyle.backgroundColor}
// //       />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// // export default App;

// //image
// import React from 'react';
// import{ Text,View,Button} from 'react-native';
// import User from './component/User';

// let name = 'shiv';
// var email = 'narayan@123.com';
//  var age =3;

// const app = () =>

// {
// return(

//   <View>
//     <User />
//     <Text style={{ fontSize:40}}>hello world</Text>
//     <Button title='press here'></Button>

//     <Text style={{ fontSize:40}}>{age}</Text>
//     <Button title='press here'></Button>

//     <Text style={{ fontSize:60}}>hello ji</Text>
//     <Button title='press here'></Button>

//     <Text style={{}}></Text>
//     <Button title='press here'></Button>

//     <Text>{age===39?"above 30":"unkhown age"}</Text>

//     <Text>{name}</Text>

//   </View>
// )
// }
// export default app;
/*
import React from 'react'
import {View,Text,Button} from 'react-native'

const shiv = () => {

  const abc = () => {
    console.warn("jai shree ram")
     let data = 'jaiho';
     
  }
return(
  <View>

    <Text></Text>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eligendi.
    </Text>
    <Button title='press here'  onPress={ ()=> abc()} color={'red'} />
  </View>

)

}
export default shiv;
*/
// class = 9 state
// import React, { useState } from "react";
// import {View,Text, Button} from 'react-native';

// const App = () => {

//  const [name,setName] = useState("amil");
//  let data = "gunjan"

//  function art(){
//   setName("utttff");
//   data ="peter";

//  }

//   return(
//     <View>
//       <Text>{name}</Text>

//       <Text>{data}</Text>
//       <Button  title='pres here' onPress={art}/>
//     </View>
//   );
// };
// export default App;

//class 10 props

//import React, {useState} from 'react';
//import {Button, Text, View} from 'react-native';

// const App = () =>{

//   let [data,setData] =useState(" abcdefghijklmnopqewtuvwxyz");

//   return(
//     <View>

//       <Text></Text>
//       <Text>jai sre ram</Text>
//       <Button title='update Props' onPress={()=>setData('peret')}/>
//       <Super data ={data} />
//     </View>

//   )

// }

//  const Super=(props)=>{

//  return(
//    <View>
//      <Text></Text>
//      <Text>sri jai radhe</Text>
//      <Text>{props.data}</Text>
//    </View>

//  )

 //}

 //export default App;

// //class 11 style

// import React from 'react';
// import {View,Text, StyleSheet} from 'react-native';
// import Exstyle from './super'

// const App = () =>{

//   return(
//     <View>
//       <Text style={{ color:'blue',}}>Style in React NATIVE</Text>
      

//       <Text style={Exstyle.terabox}>Style in React NATIVE</Text>
      
//       <Text style={Exstyle.terabox}>Style in React NATIVE</Text>
      
//       <Text style={{ color:'blue',}}>Style in React NATIVE</Text>
//     </View>

//   )
// }
//     const style = StyleSheet.create({
//       terabox:{fontSize:5,color:'red',borderWidth:1,borderColor:'aqua',margin:10}

//     }
//     )

// export default App;

//class 12  Get TextInput value



// import React,{useState} from 'react';
// import {View,Text, StyleSheet,Button,TextInput
// } from 'react-native';

// const App = () =>{

//   const [name,setName] = useState("nvnvn");



//    return(
//     <View>
//       <Text>Get TextInput Value </Text>
      
//        <Text>Your Name is:{name} </Text>
// <TextInput 
// style={styles.textinput}
// placeholder="enter your Name :"
// value={name}
// onChangeText={(text)=>setName(text)}

// />
// <Button  title='Clear input value' onPress={()=>setName('')}/>

//     </View>

//    );
// };

// const styles = StyleSheet.create({
//  textinput :{
//   fontSize:18,
//   color:"aqua",
//   borderWidth:2,
//   borderColor:'red',

//  }
// });


//export default App;


// //Props 11
// import React, { useState } from "react";
// import {View,Text,Button} from 'react-native';

// const App = () => {

//   const [name,setName] = useState("shiv");
  

  


//   return(
//     <View>
//       <Text style ={{fontSize:30}}>react native props</Text>
//       <Button  title='press here' onPress={()=>setName("JAI SRI RAM")}/>
//       <User name={name} age={34}/>
//     </View>

//   )

// }
// const User = (props) => {

//   return(
//     <View style={{ backgroundColor:'green',padding:4}}>
//       <Text>{props.name}</Text>
//       <Text>{props.age}</Text>

//     </View>
//   )
//}

//export default App;

import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const App =() =>{

  return(
    <View>
      <Text style={{fontSize:50, backgroundColor:'red',padding:5, borderRadius:5, marginBottom:10}}>Inline CSS</Text>
      
      <Text style={{fontSize:50, backgroundColor:'red',padding:5, borderRadius:5, marginBottom:10}}>Inline CSS</Text>
      
      <Text style={{fontSize:50, backgroundColor:'red',padding:5, borderRadius:5, marginBottom:10}}>Inline CSS</Text>
      
      <Text style={styles.terabox}>Inline CSS</Text>
    </View>


  );
  
};
const styles = StyleSheet.create({
  terabox:{
    fontSize:10,
    fontStyle: 5,
    backgroundColor:'aqua',
    padding:5,
    borderRadius:5,


  }
})
export default App;



