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
    Image: ImagePath.milk,
  },
  {
    id: 2,
    Image: ImagePath.snowpeas1,
  },

  {
    id: 3,
    Image: ImagePath.pickcity,
  },

  {
    id: 4,
    Image: ImagePath.milk,
  },

  {
    id: 5,
    Image: ImagePath.milk,
  },

  {
    id: 6,
    Image: ImagePath.snowpeas1,
  },
];

const SearchScreen = ({navigation}) => {
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
                  Search
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{height: 19, width: 16, marginRight: 6}}
                  source={ImagePath.filter}
                />
              </View>

              <View>
                <Text
                  style={{fontSize: 15, fontWeight: '700', color: '#2D2E43'}}>
                  Filter
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View
          style={{
            height: 40,
            width: 312,
            borderWidth: 1,
            borderColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <View style={{left: 10, top: 10}}>
            <Image
              style={{height: 15, width: 15}}
              source={ImagePath.redsearch}
            />
          </View>

          <View style={{top: -15, left: 28}}>
            <TextInput placeholder="Snow" />
          </View>

          <TouchableOpacity>
            <View style={{top: -44, left: 280}}>
              <Image style={{height: 17, width: 17}} source={ImagePath.crose} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={mobiledata}
        //   horizontal={true}
        numColumns={2}
        renderItem={({item}) => (
          <View style={{marginTop:25}}>
            <TouchableOpacity onPress={()=>navigation.navigate('AllProducts')}
              style={{ marginLeft: 22}}>
              <Image style={{height: 226, width: 150}} source={item.Image} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default SearchScreen;
