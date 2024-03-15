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

const TermsandPrivacyPolicy = ({navigation}) => {
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
                  My Favorite
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{left: 22}}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#1F272D'}}>
          Terms Of use
        </Text>
      </View>

      <View style={{top:12,left:22,marginRight:60}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#1F272D'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{' '}
        </Text>
      </View>

      < View style={{top:20,left:22,marginRight:39}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#1F272D'}}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </Text>
      </View>

      <View style={{top:25,left:22,marginRight:60}}> 
        <Text style={{fontSize: 14, fontWeight: '400', color: '#1F272D'}}>
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum
        </Text>
      </View>

      <View style={{top:30,width:310,left:22}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#1F272D'}}>
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMake.
        </Text>
      </View>

      <View style={{left: 22,top:45}}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#1F272D'}}>
          Privacy Policy
        </Text>
      </View>

      <View style={{top:45,left:22,marginRight:100,top:60}}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </Text>
      </View>
    </View>
  );
};
export default TermsandPrivacyPolicy;
