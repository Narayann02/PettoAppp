import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const mobiledata = [
  {
    id: 1,
    Image: ImagePath.fidele,
    Image1: ImagePath.fav,
  },
  {
    id: 2,
    Image: ImagePath.NutriTreats,
    Image1: ImagePath.fav,
  },

  {
    id: 3,
    Image: ImagePath.HUFTBowl,
    Image1: ImagePath.fav,
  },

  {
    id: 4,
    Image: ImagePath.HUFTRaincoat,
    Image1: ImagePath.fav,
  },

  {
    id: 5,
    Image: ImagePath.SaraPaneer,
    Image1: ImagePath.fav,
  },

  {
    id: 6,
    Image: ImagePath.DogBedMattress,
    Image1: ImagePath.fav,
  },
];

const HelpandSupport = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{height: 30, width: 30}}
                  source={ImagePath.atoz}
                />
              </View>

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
          </TouchableOpacity>
        </View>
      </View>

      <View style={{left: 22, top: -10}}>
        <Text style={{fontSize: 16, fontWeight: '700', color: '#1F272D'}}>
          Call or Chat with us
        </Text>
      </View>

      <View style={{top: -2}}>
        <View
          style={{
            height: 136,
            width: 318,
            // borderWidth: 1,
            // borderColor: '#FFFFFF',
            backgroundColor: '#FFFFFF',
            left: 22,
            borderRadius: 8,
            elevation: 5,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 28, width: 28}}
                source={ImagePath.whataap}
              />

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: '#1F272D',
                  left: 10,
                }}>
                WhatsApp
              </Text>
            </View>
            <Image
              style={{height: 16, width: 9, top: 9}}
              source={ImagePath.ppp}
            />
          </View>

          <View style={{left: 22, width: 250, top: -5}}>
            <Text style={{color: '#888888', fontSize: 14, fontWeight: '400'}}>
              Stay Connected with Us on WhatsApp for Any Assistance or Support
              You May Need from Our Side.
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{width: 360, borderWidth: 1, borderColor: '#F0F0F0', top: 18}}
      />

      <View style={{left: 22, top: 30}}>
        <Text style={{fontSize: 16, fontWeight: '700', color: '#1F272D'}}>
          FAQs
        </Text>
      </View>

      <View style={{top: 38}}>
        <View
          style={{
            height: 188,
            width: 318,
            // borderWidth: 1,
            // borderColor: 'black',
            left: 22,
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            elevation: 8,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#1F272D',
                left: 10,
              }}>
              How to place an order?
            </Text>

            <Image
              style={{height: 10, width: 15, top: 9}}
              source={ImagePath.plane}
            />
          </View>

          <View style={{left: 22, width: 250, top: 20}}>
            <Text style={{color: '#888888', fontSize: 14, fontWeight: '400'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop:60, left: 22, elevation: 8}}>
        <View
          style={{
            width: 318,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            elevation:5
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1F272D'}}>
              Is safe to use app?
            </Text>
            <Image
              style={{height: 10, width: 14, top: 8}}
              source={ImagePath.capter}
            />
          </View>
        </View>
      </View>


      <View style={{marginTop:20, left: 22, elevation: 8}}>
        <View
          style={{
            width: 318,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            elevation:5
          
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1F272D'}}>
            How do I receive order details ?
            </Text>
            <Image
              style={{height: 10, width: 14, top: 8}}
              source={ImagePath.capter}
            />
          </View>
        </View>
    </View>



    <View style={{marginTop:20, left: 22, elevation: 8}}>
        <View
          style={{
            width: 318,
            height: 72,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            elevation:5
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 12,
              top:12
            }}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#1F272D',width:280,}}>
            How can I edit my profile 
information?
            </Text>
            <Image
              style={{height: 10, width: 14, top: 8}}
              source={ImagePath.capter}
            />
          </View>
        </View>
    </View>
    
    </View>
  );
};
export default HelpandSupport;
