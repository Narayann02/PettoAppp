import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const MyProfile = ({navigation}) => {
  return (
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
              Carts
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{alignSelf: 'center', top: 6}}>
        <Image
          style={{height: 140, width: 140}}
          source={ImagePath.AnanyaSinghania}
        />
      </TouchableOpacity>

      <View style={{marginTop: 40}}>
        <View style={{flexDirection: 'row', left: 22, top: -4}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
            Name{' '}
          </Text>
          <Text style={{color: '#EF1818'}}>*</Text>
        </View>

        <View
          style={{
            height: 48,
            width: 316,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
              left: 15,
            }}
            placeholder="Ananya Singhania"
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <View style={{left: 22, top: -6}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
            Email{' '}
          </Text>
        </View>

        <View
          style={{
            height: 48,
            width: 316,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
              left: 15,
            }}
            placeholder="ananyasingha@gmail.com"
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <View style={{left: 22, top: -6}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
            Gender{' '}
          </Text>
        </View>

        <View
          style={{
            height: 48,
            width: 316,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
              left: 15,
            }}
            placeholder="Female,"
          />

          <TouchableOpacity style={{top: -26, left: 285}}>
            <Image style={{height: 10, width: 12}} source={ImagePath.air} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#F14647',
              height: 50,
              width: 316,
              borderRadius: 10,
              left: 22,
              top: 42,
            }}>
            <View style={{alignItems: 'center', top: 13}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
                Update
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MyProfile;
