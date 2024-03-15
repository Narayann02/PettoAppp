import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
// import { StylesGloble } from '../../helper/Globlecss';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <View>
        <ImageBackground
          style={{height: 90, width: 90, left: 135, top: 70}}
          source={ImagePath.vinson}></ImageBackground>

        <Text
          style={{
            fontsize: 20,
            fontWeight: '600',
            color: '#1D2226',
            left: 130.5,
            top: 80,
          }}>
          Vinson Cooper
        </Text>
      </View>

      <View style={{alignSelf: 'center', marginTop: 60}}></View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            flexDirection: 'row',
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 20,
          }}
          onPress={() => navigation.navigate('Myprofile')}>
          <View style={{flex: 0.4}}>
            <Image
              style={{height: 25, width: 25}}
              source={ImagePath.profile}
              resizeMode="cover"
            />
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
              My profile
            </Text>
          </View>
          <View style={{justifyContent: 'center', flex: 0.1}}>
            <Image
              style={{height: 12, width: 7}}
              source={ImagePath.bda}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#E2E2E2'}} />
      </View>
      <View style={{marginTop: -5}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            flexDirection: 'row',
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 20,
          }}
          onPress={() => navigation.navigate('ChangePassword')}>
          <View style={{flex: 0.4}}>
            <Image
              style={{height: 25, width: 25}}
              source={ImagePath.lock}
              resizeMode="cover"
            />
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
              Change password
            </Text>
          </View>
          <View style={{justifyContent: 'center', flex: 0.1}}>
            <Image
              style={{height: 12, width: 7}}
              source={ImagePath.bda}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#E2E2E2'}} />

        <View style={{marginTop: -5}}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              flexDirection: 'row',
              paddingLeft: 25,
              paddingRight: 25,
              paddingBottom: 20,
            }}
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <View style={{flex: 0.4}}>
              <Image
                style={{height: 25, width: 25}}
                source={ImagePath.privacy}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                Privacy policy
              </Text>
            </View>
            <View style={{justifyContent: 'center', flex: 0.1}}>
              <Image
                style={{height: 12, width: 7}}
                source={ImagePath.bda}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E2E2E2'}} />
        </View>

        <View style={{marginTop: -5}}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              flexDirection: 'row',
              paddingLeft: 25,
              paddingRight: 25,
              paddingBottom: 20,
            }}
            onPress={() => navigation.navigate('TermsandCondition')}>
            <View style={{flex: 0.4}}>
              <Image
                style={{height: 25, width: 25}}
                source={ImagePath.terms}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                Terms & conditions
              </Text>
            </View>
            <View style={{justifyContent: 'center', flex: 0.1}}>
              <Image
                style={{height: 12, width: 7}}
                source={ImagePath.bda}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E2E2E2'}} />
        </View>

        <View style={{marginTop: -5}}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              flexDirection: 'row',
              paddingLeft: 25,
              paddingRight: 25,
              paddingBottom: 20,
            }}
            onPress={() => navigation.navigate('Logout')}>
            <View style={{flex: 0.4}}>
              <Image
                style={{height: 25, width: 25}}
                source={ImagePath.logout}
                resizeMode="cover"
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '400'}}>
                Logout
              </Text>
            </View>
            <View style={{justifyContent: 'center', flex: 0.1}}>
              <Image
                style={{height: 12, width: 7}}
                source={ImagePath.bda}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E2E2E2'}} />
        </View>
      </View>
    </View>
  );
};
export default Setting;
