// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

//import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native"

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

//  11. StyleSheet

// import React from "react";
// import{View,Text, StyleSheet } from 'react-native'
// import exstyle from './style'

// const App = ()=>{

//   return(
//     <View>
//       <Text style={styles.textbox}>internal Css</Text>
//       <Text style={[exstyle.textbox,styles.textbox]}>external css</Text>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   textbox:{
//     fontSize:20,
//     backgroundColor:'red',
//     borderRadius:5,
//     marginBottom:2,
//     padding:5,
//     textAlignVertical:'center',
//     textAlign:'center'

//   }

// })

// export default App;

//12 TextInput
//import React, { useState } from "react"
//import {textInput,View,Text,} from 'react-native';

//const App = () => {

// const[name,setName] = useState('');

// return(
//   <SafeAreaView>
//   <View>
//     <Text>GetInput Data</Text>
//     <Text >your Name is :{name}</Text>
//     <TextInput

// style={styles.textbox}

//     placeholder="Enter your Name"
//     value={name}
//     onChangeText={(text)=>setName(text)}
//     />
//     <Button  title="press here" onPress={()=>setName('')}/>
//   </View>
//   </SafeAreaView>
// )

// }
// const styles = StyleSheet.create({

//   textbox:{
//     fontSize:18,
//     backgroundColor:'red',
//     borderWidth:2,
//     marginBottom:10,
//     marginTop:10,
//     textAlign:'center'

//   }
// })

// export default App;

//.12. Image

//import React from 'react';
//import {Text,View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 100,
//     height: 100,
//     backgroundColor:'aqua',
//     textAlign:'center'
//   },
//   logo: {
//     width: 87,
//     height: 58,
//   },
// });

// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={require('./src/assest/Images/images.jpg')}
//       />
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: ''
//         }}
//       />
//       <Image
//         style={styles.logo}
//         source={{
//           uri: ''
//         }}
//       />
//     </View>
//   );
// };

// export default DisplayAnImage;

// import React from 'react';

// //13. Form
// import React, {useState} from 'react';
// import {TextInput, View, Text, StyleSheet, Button} from 'react-native';

// const App = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [display, setDisplay] = useState(false);

//   const resetFormData = () =>{
//     setDisplay(false)
//     setName("");
//     setEmail("");
//     setPassword("");

//   }

//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Form in React-native</Text>
//       <TextInput
//         style={styles.textbox}
//         placeholder="enter your Name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         style={styles.textbox}
//         placeholder="enter your Password"
//         secureTextEntry={true}
//         onChangeText={text => setPassword(text)}
//         value={password}
//       />

//       <TextInput
//         style={styles.textbox}
//         placeholder="enter your Email"
//         onChangeText={text => setEmail(text)}
//         value={email}
//       />

//       <View style={{marginBottom: 10}}>
//         <Button title="press Details" onPress={() => setDisplay(true)} />
//       </View>

//       <Button color={'red'} title="clear Details" onPress={resetFormData} />
//       {display ? (
//         <View>
//           <Text>your Name is :{name}</Text>
//           <Text>your password is :{password}</Text>
//           <Text>your Email is :{email}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textbox: {
//     fontSize: 18,
//     borderWidth: 2,
//     margin: 10,
//   },
// });

// export default App;


import React from 'react';
import Routes from './Navigation/Routes';
// import Routes from './Navigation/Routes';
// import DrawerNavigator from './src/Screens/Home/DrawerNavigation';
// import Pressable from './src/Screens/Home/Pressable';
// import App from './src/Screens/Home/TabNavigation';
//import Routes from './Navigation/Routes';
//import { SectionList } from 'react-native/Libraries/Lists/SectionList';
// import DrawerNavigation from './src/Screens/Home/DrawerNavigation';




const Atsx= () =>{
 return(<Routes />

 //<Img/>
  // <DrawerNavigation />
  
  // <Pressable />
  

  );
}
export default Atsx;








