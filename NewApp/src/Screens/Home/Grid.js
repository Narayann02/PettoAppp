import React from "react";
import { View ,Text, StyleSheet} from 'react-native';


const user = [
 
{
   id:1,
   name:'aman'
 },
{
  id:2,
  name:'narayan'
 },
 {
  id:3,
  name:'sager'
},
{
  id:4,
  name:'arjun'
},
{
  id:5,
  name:'advk'
},
]

const Gd =()=>{
return(
    <View>
    <Text style={{fontSize:50}}>Grid System</Text>

    <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
        {
        user.map((item)=><Text>{item.name}</Text>)
        }
        

        poqiqqqweetryqwerrtyuioopkljjghbcbbm  []=
    </View>

    </View>
);
};

const styles =StyleSheet.create({
    item:{
        fontSize:20,
        backgroundColor:'red',
        margin:8,
        padding:15,
        width:100,
        height:100,
        textAlignVertical:'center',
        textAlign:'center'

    }
})
export default Gd;