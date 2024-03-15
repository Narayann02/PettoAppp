import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList,Share} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import {Styles} from './styles';

const SettingScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 22,
          top: 5,
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
              Settings
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={()=> navigation.navigate('MyProfile')}>
          <View>
            <Image
              style={{height: 23, width: 18, marginTop: 2}}
              source={ImagePath.profi}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Profile</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
                width: 200,
              }}>
              Update your name and profile picture (DP)
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={() => navigation.navigate('MyOrders')}>
          <View>
            <Image
              style={{height: 24, width: 22, marginTop: 2}}
              source={ImagePath.lockred}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Orders</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
                width: 240,
              }}>
              Conveniently track and manage your purchase
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={() => navigation.navigate('FavoriteProducts1')}>
          <View>
            <Image
              style={{height: 22, width: 26, marginTop: 2}}
              source={ImagePath.fav}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Favorite</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
                width: 210,
              }}>
              Explore and evaluate your favorite products
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={() => navigation.navigate('HelpandSupport')}>
          <View>
            <Image
              style={{height: 20, width: 25, marginTop: 2}}
              source={ImagePath.help}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Help & Support</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
                width: 250,
              }}>
              Get instant help and ask for quick support
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={() => navigation.navigate('TermsandPrivacyPolicy')}>
          <View>
            <Image
              style={{height: 26, width: 26, marginTop: 2}}
              source={ImagePath.tem}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Terms and Privacy Policy</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
                width: 250,
              }}>
              Understand your rights and privacy standards
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={() => navigation.navigate('TermsandPrivacyPolicy')}>
          <View>
            <Image
              style={{height: 20, width: 25, marginTop: 2}}
              source={ImagePath.PRO}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Invite Friend</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
                width: 250,
              }}>
              Share the app with your friends and loved ones
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: 22}}
          onPress={() => navigation.navigate('FavoriteProducts1')}>
          <View>
            <Image
              style={{height: 21, width: 25, marginTop: 2}}
              source={ImagePath.LOG}
            />
          </View>
          <View style={{marginLeft: 28}}>
            <Text style={Styles.solapansoblack}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SettingScreen;
