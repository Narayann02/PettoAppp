import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonField from '../../helper/ButtonField';

const MyInterestScreen = () => {
  return (
    <>
   
     

      <View
        style={{
          borderRadius: 5,
          borderWidth: 1,
          borderBottomWidth: 1,

          borderColor: '#3498DB',
          // color: '#F08080',
          backgroundColor: '#3498DB',
          height: 40,
          width: 80,
          marginTop: 10,
          marginLeft: 41,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            alignSelf: 'center',
            padding: 8,
            fontWeight: '600',
          }}>
          Yoga
        </Text>
      </View>

      <View style={{alignSelf: 'center', marginTop: -90, marginLeft: 80}}>
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderBottomWidth: 1,

            borderColor: '#CBCFD2',
            color: '#F08080',
            // backgroundColor: '"#EEEEEE',
            height: 40,
            width: 80,
            marginTop: 50,
            marginLeft: 32,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              alignSelf: 'center',
              padding: 8,
              fontWeight: '400',
            }}>
            Movie
          </Text>
        </View>

        <View style={{marginLeft: 100, marginTop: -90, marginRight: -10}}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderBottomWidth: 1,

              borderColor: '#CBCFD2',
              color: '#E6E8EA',
              // backgroundColor: '#E6E8EA',
              height: 40,
              width: 80,
              marginTop: 50,
              marginLeft: 32,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                alignSelf: 'center',
                padding: 8,
                fontWeight: '400',
              }}>
              Sports
            </Text>
          </View>
        </View>

        <View style={{marginTop: -30}}>
          <View style={{marginLeft: -100}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#CBCFD2',
                color: '#F08080',
                // backgroundColor: '#3498DB',
                height: 40,
                width: 55,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '400',
                }}>
                Tea
              </Text>
            </View>
          </View>

          <View style={{marginTop: -90, marginLeft: -25}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#3498D8',
                // color: '#F08080',
                backgroundColor: '#3498DB',
                height: 40,
                width: 85,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '600',
                }}>
                Travel
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 80, marginTop: -90}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#CBCFD2',
                color: '#F0F2F4',
                // backgroundColor: '#F0F2F4',
                height: 40,
                width: 80,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '400',
                }}>
                Music
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: -30}}>
          <View style={{marginLeft: -100}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#CBCFD2',
                color: '#F08080',
                // backgroundColor: '#3498DB',
                height: 40,
                width: 100,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '400',
                }}>
                Gardening
              </Text>
            </View>
          </View>

          <View style={{marginTop: -90, marginLeft: 20}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#CBCFD2',
                color: '#F08080',
                // backgroundColor: '#3498DB',
                height: 40,
                width: 100,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '400',
                }}>
                Swimming
              </Text>
            </View>
          </View>

          <View style={{marginTop: -90, marginLeft: 140}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#3498DB',
                // color: '#F08080',
                backgroundColor: '#3498DB',
                height: 40,
                width: 55,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '600',
                }}>
                Art
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: -30}}>
          <View style={{marginLeft: -100}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#CBCFD2',
                color: '#F08080',
                // backgroundColor: '#3498DB',
                height: 40,
                width: 120,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '400',
                }}>
                Photography
              </Text>
            </View>
          </View>

          <View style={{marginTop: -90, marginLeft: 40}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#3498DB',
                // color: '#F08080',
                backgroundColor: '#3498DB',
                height: 40,
                width: 120,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '600',
                }}>
                Video games
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 60, marginRight: 9, marginLeft: -65}}>
          <TouchableOpacity>
            <ButtonField label={'Continue'} />
          </TouchableOpacity>
        </View>
      </View>
      
    </>
  );
};

export default MyInterestScreen;
