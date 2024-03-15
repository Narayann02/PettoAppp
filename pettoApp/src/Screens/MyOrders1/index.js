import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native";
import ImagePath from "../../constants/ImagePath";


const MyOrders1 =()=>{


    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
        
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View>
                <Image style={{height: 30, width: 30}} source={ImagePath.atoz} />
              </View>
              </TouchableOpacity>
  
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#2D2E43',
                    left: 15,
                  }}>
             My Orders
                </Text>
              </View>
            </View>
         


        </View>


        <View style={{alignSelf:'center'}}>

            <Image  
            style={{width:224,height:177}}
            source={ImagePath.box}/>
        </View>

        <View>
            <Text style={{fontSize:16,fontWeight:'700',color:'black',alignSelf:'center'}}>Your Order List is empty!</Text>
            <Text style={{fontSize:14,fontWeight:'400',color:'#888888',width:200,alignSelf:'center',top:10}}>Start exploring and fill your cart with Exciting Finds!</Text>
            </View>


            <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',top:40}}>
                <Text style={{fontSize:16,fontWeight:'700',color:'#F4533A'}}>Shop Now
</Text>
<Image  
style={{height:19,width:14,top:2,left:6}}
source={ImagePath.redero}/>
            </TouchableOpacity>
        </View>
        )
        }

        export default MyOrders1;