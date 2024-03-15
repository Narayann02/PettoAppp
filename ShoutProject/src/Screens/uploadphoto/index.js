import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const  uploadphoto = () => {
  

       return(   
        <View>
        
  
        <View>
          <View style={{backgroundColor: 'white', height: 75, width: 360}} />
  
          <ImageBackground
            style={{height: 15, width: 15, left: 22, top: -40}}
            source={ImagePath.Arrow_left}></ImageBackground>
  
          <View style={{}}>
            <ImageBackground
              style={{height: 30, width: 30, top: -64, left: 43}}
              source={ImagePath.EricaBrewster}></ImageBackground>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'black',
                left: 79,
                top: -87,
              }}>
              Erica Brewster
            </Text>
            <ImageBackground
              style={{width: 3.5, height: 15, top: 52, left: 334, top: -103}}
              source={ImagePath.threedout}></ImageBackground>
          </View>
  
          <View>
            <View
              style={{
                borderBottomWidth: 1,
                borderWidth: 1,
                height: 68,
                width: 205,
                left: 132,
                top: -50,
                borderBottomLeftRadius: 24,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 15,
                backgroundColor: '#38AFE7',
                borderBottomColor: '#38AFE7',
                borderColor: '#38AFE7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#FFFFFF',
                  alignSelf: 'center',
                  top: 18,
                }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </Text>
            </View>
            <Text
              style={{
                fontSize: 8,
                fontWeight: '400',
                color: '#BEBEBE',
                left: -50,
              }}>
              07:22 AM
            </Text>
          </View>
          <View style={{top: -25}}>
            <Image
              style={{height: 33.6, width: 33.6, left: 22.16, top: -10}}
              source={ImagePath.EricaBrewster}
            />
            <View
              style={{
                top: -43,
                height: 47,
                width: 203.89,
                left: 64.13,
                borderBottomWidth: 1,
                borderWidth: 1,
                borderBottomLeftRadius: 30,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomColor: '#F0F0F0',
                borderColor: '#F0F0F0',
                backgroundColor:10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#878787',
                  alignSelf: 'center',
                  top: 13,
                }}>
                Lorem ipsum dolor sit amet
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: '400',
                  color: '#BEBEBE',
                  left: 220,
                  top: 3,
                }}>
                07:22 AM
              </Text>
            </View>
          </View>
          <Image
            style={{
              height: 144,
              width: 160,
              borderRadius: 4,
              left: 178,
              top: -45,
            }}
            source={ImagePath.Rectangle_131}
          />
  
          <View
            style={{
              height: 47.13,
              width: 225,
              left: 113,
              borderRadius: 0,
              top: -20,
              borderBottomWidth: 1,
              borderWidth: 1,
              borderBottomLeftRadius: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 25,
              backgroundColor: '#38AFE7',
              borderColor: '#38AFE7',
              borderBottomColor: '#38AFE7',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#FFFFFF',
                alignSelf: 'center',
                top: 14,
              }}>
              Lorem ipsum dolor consectetur
            </Text>
            <Text
              style={{
                fontSize: 8,
                fontWeight: '400',
                color: '#BEBEBE',
                left: -48,
                top: 4,
              }}>
              07:22 AM
            </Text>
          </View>
  
          <ImageBackground
            style={{height: 33.6, width: 33.6, left: 22, top: 3}}
            source={ImagePath.EricaBrewster}></ImageBackground>
  
          <View style={{top: -28}}>
            <View
              style={{
                height: 55,
                width: 203.89,
                left: 64.69,
                borderBottomWidth: 1,
                borderWidth: 1,
                borderBottomRightRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 30,
                borderBottomColor: '#F0F0F0',
                borderColor: '#F0F0F0',
  
                backgroundColor:10,
              }}>
              <ImageBackground
                style={{height: 30, width: 103, left: 12, top: 13}}
                source={ImagePath.videoS}></ImageBackground>
              <Text
                style={{
                  left: 120,
                  top: -10,
                  fontSize: 12,
                  fontWeight: '400',
                  color: 'black',
                }}>
                03:20
              </Text>
              <ImageBackground
                style={{height: 30, width: 30, left: 160, top: -34}}
                source={ImagePath.video}></ImageBackground>
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: '400',
                  color: '#BEBEBE',
                  left: 220,
                  top: -55,
                }}>
                07:22 AM
              </Text>
            </View>
          </View>
  
          <View style={{}}>
            <View
              style={{
                borderBottomWidth: 1,
                borderWidth: 1,
                height: 68,
                width: 205,
                left: 132,
                top: -6,
                borderBottomLeftRadius: 24,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 15,
                backgroundColor: '#38AFE7',
                borderBottomColor: '#38AFE7',
                borderColor: '#38AFE7',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#FFFFFF',
                  alignSelf: 'center',
                  top: 18,
                }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: '400',
                  color: '#BEBEBE',
                  left: -50,
                }}>
                07:22 AM
              </Text>
            </View>
          </View>
  
          <View
            style={{
              borderBottomWidth: 1,
              borderWidth: 1,
              width: 256,
              height: 46,
              left: 23,
              borderRadius: 23,
              border: 1,
              elevation: 0,
              top: 16,
              borderColor: 'rgba(255, 255, 255, 1)',
              borderBottomColor: 'rgba(246, 246, 246, 1)',
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'rgba(204, 204, 204, 1)',
                left: 20,
                top: 13,
              }}>
              Message
            </Text>
  
            <ImageBackground
              style={{height: 16, width: 21.33, left: 192, top: -2}}
              source={ImagePath.camera}></ImageBackground>
            <ImageBackground
              style={{height: 16, width: 16, left: 222, top: -18}}
              source={ImagePath.url}></ImageBackground>
          </View>
          <View style={{top: 16}}>
            <ImageBackground
              style={{
                height: 46,
                width: 46,
                borderRadius: 23,
                left: 292,
                top: -46,
              }}
              source={ImagePath.bluegola}>
              <TouchableOpacity>
                <ImageBackground
                  style={{height: 20, width: 12.5, alignSelf: 'center', top: 13}}
                  source={ImagePath.speaker}></ImageBackground>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>

        
 
            <View style={{backgroundColor:'#FFFFFF',height:230,width:350,left:4,top:-220,borderRadius:25}}>
                <ImageBackground 
                style={{height:120,width:239,borderRadius:6.38,left:52,top:60}}
                source={ImagePath.Group_708}></ImageBackground>
                <Text style={{fontSize:18,fontWeight:'500',color:'#000000',left:120,top:-108}}>Upload photo</Text>
                <Image  
                style={{width:12,height:12,left:315,top:-126}}
                source={ImagePath.Group_600}/>
            </View> 
      </View>
        );
      };
      export default uploadphoto;   



        
      
    
      
         
        
      
     
     

     

   
   
 
