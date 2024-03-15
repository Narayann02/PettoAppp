import React from 'react';
import {View, Text} from 'react-native';

//const deviceHeight = Dimentions.get('window').height;
//const deviceWidth = Dimentions.get('window').width;

const App = () => {
 // ShowDimention = () => {
   // console.log(deviceHeight + '  ' + deviceWidth);
  //};

  return (
    <View >
      {/* <Button title="Get Dimention" onPress={ShowDimention} /> */}
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: 'red',
          borderRadius: 10,
          padding: 20,
          marginVertical:250,
          alignSelf:"center",
        //   marginLeft:100,
        //   justifyContent:'center',
        //   alignItems:'center',
         // marginHorizontal:50
          
          
        }}>
        <Text>This is Responsive Element</Text>
      </View>
    </View>
  );
};
export default App;
