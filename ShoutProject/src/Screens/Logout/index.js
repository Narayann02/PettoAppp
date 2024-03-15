import React from "react";
import {ImageBackground, View,Text,Modal, TouchableOpacity} from 'react-native';
import ImagePath from "../../constants/ImagePath";

const Logout=({navigation})=>{

    return(


        
      

        <View>



<View>
        <Modal transparent={true}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 40,
            justifyContent: 'center',
            alignItems: 'center',
            height: 350,
            width: 316,
            left: 22,
            borderRadius:6,
            top: 260,
            shadowColor: 'black',
          
          }}>
          <ImageBackground
            style={{height:45.72, width:60, alignSelf: 'center', top: -8}}
            source={ImagePath.Group_172}></ImageBackground>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#1D2226',
              top: 25,
            }}>
           Are you sure you want to                                              
                                                                                               Logout?

          </Text>
         
         <View style={{top:15}}>
<TouchableOpacity>
          <ImageBackground
            style={{height: 50, width: 118, left: 75, borderRadius: 4, top: 60}}
            source={ImagePath.Button_back} imageStyle={{borderRadius:6}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'white',
                alignSelf: 'center',
                top: 15,
              }}>
              Yes
            </Text>
          </ImageBackground>
          </TouchableOpacity>
          
         

          <TouchableOpacity
            style={{
              height: 50,
              width: 118,
              left: -75,
              borderRadius:6,
              top: 10,
              backgroundColor: 'white',
              borderWidth: 1,
              borderBottomWidth: 1,
              borderBlockColor: '#EEEEEE',
              borderColor: '#EEEEEE',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#1D2226',
                alignSelf: 'center',
                top: 15,
              }}>
              No
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
       </View>
             

            <ImageBackground 
            style={{height:90,width:90,left:135,top:70}}
            source={ImagePath.vinson}></ImageBackground>
            <Text style={{fontsize:21,fontWeight:'600',color:'#1D2226',left:130.5,top:80}}>Vinson Cooper</Text>

            <View>
                <ImageBackground 
                style={{height:23,width:23,left:21.92,top:120}}
                source={ImagePath.profile}></ImageBackground>
                <Text style={{fontSize:17,fontWeight:'400',color:'#000000',left:54.92,top:98}}>My profile</Text>

                <ImageBackground 
                style={{height:12,width:7,left:333,top:85,}}
                source={ImagePath.bda}></ImageBackground>

                <View style={{borderBottomWidth:1,height:360,top:-245,borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE',}}/>
            </View>




            <View style={{marginTop:-340}}>
                <ImageBackground 
                style={{height:23,width:23,left:21.92,top:120}}
                source={ImagePath.lock}></ImageBackground>
                <Text style={{fontSize:17,fontWeight:'400',color:'#000000',left:54.92,top:98}}>Change password</Text>

                <ImageBackground 
                style={{height:12,width:7,left:333,top:85,}}
                source={ImagePath.bda}></ImageBackground>

                <View style={{borderBottomWidth:1,height:360,top:-245,borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE',}}/>
            </View>


            <View style={{marginTop:-340}}>
                <ImageBackground 
                style={{height:23,width:23,left:21.92,top:123}}
                source={ImagePath.privacy}></ImageBackground>
                <Text style={{fontSize:17,fontWeight:'400',color:'#000000',left:54.92,top:102}}>Privacy policy</Text>

                <ImageBackground 
                style={{height:12,width:7,left:333,top:90,}}
                source={ImagePath.bda}></ImageBackground>

                <View style={{borderBottomWidth:1,height:360,top:115,borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE',}}/>
            </View>



            
            <View style={{marginTop:-340}}>
                <ImageBackground 
                style={{height:23,width:23,left:21.92,top:123}}
                source={ImagePath.terms}></ImageBackground>
                <Text style={{fontSize:17,fontWeight:'400',color:'#000000',left:54.92,top:102}}>Terms & conditions</Text>

                <ImageBackground 
                style={{height:12,width:7,left:333,top:90,}}
                source={ImagePath.bda}></ImageBackground>

                <View style={{borderBottomWidth:1,height:360,top:115,borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE',}}/>
            </View>



            <View style={{marginTop:-340}}>
                <ImageBackground 
                style={{height:23,width:23,left:21.92,top:123}}
                source={ImagePath.logout}></ImageBackground>
                <Text style={{fontSize:17,fontWeight:'400',color:'#000000',left:54.92,top:102}}>Logout</Text>

                <ImageBackground 
                style={{height:12,width:7,left:333,top:90,}}
                source={ImagePath.bda}></ImageBackground>

                <View style={{borderBottomWidth:1,height:360,top:115,borderBottomColor:'#EEEEEE',borderColor:'#EEEEEE',}}/>
            </View>


         

          


            



            
        </View>

    )
}
export default Logout;