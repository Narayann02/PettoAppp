import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const MyOrders = ({navigation}) => {
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
              My Orders
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DADADA',
            height: 56,
            width: 56,
            borderRadius: 5,
            left: 22,
          }}>
          <Image
            style={{width: 25, height: 42, alignSelf: 'center', top: 7}}
            source={ImagePath.pickcat}
          />
        </View>

        <View style={{marginLeft: 40, top: 3}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#000000'}}>
            Order ID: PETTO055665
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            Snow Peas and 3 more items
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#FB8A05',
              left: 11,
            }}>
            Expected to deliver on 23 nov
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#FB8A05',
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: '#FB8A05',
              top: -12,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', top: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DADADA',
            height: 56,
            width: 56,
            borderRadius: 5,
            left: 22,
          }}>
          <Image
            style={{width: 25, height: 42, alignSelf: 'center', top: 7}}
            source={ImagePath.pickcat}
          />
        </View>

        <View style={{marginLeft: 40, top: 3}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#000000'}}>
            Order ID: PETTO055664
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            Snow Peas and 3 more items
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#FB8A05',
              left: 11,
            }}>
            Expected to deliver on 23 nov
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#FB8A05',
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: '#FB8A05',
              top: -12,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', top: 40}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DADADA',
            height: 56,
            width: 56,
            borderRadius: 5,
            left: 22,
          }}>
          <Image
            style={{width: 25, height: 42, alignSelf: 'center', top: 7}}
            source={ImagePath.pickcat}
          />
        </View>

        <View style={{marginLeft: 40, top: 3}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#000000'}}>
            Order ID: PETTO055663
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            Snow Peas and 3 more items
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#EF1818',
              left: 11,
            }}>
            Order has been canceled
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#EF1818',
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: '#EF1818',
              top: -12,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', top: 60}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DADADA',
            height: 56,
            width: 56,
            borderRadius: 5,
            left: 22,
          }}>
          <Image
            style={{width: 25, height: 42, alignSelf: 'center', top: 7}}
            source={ImagePath.pickcat}
          />
        </View>

        <View style={{marginLeft: 40, top: 3}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#000000'}}>
            Order ID: PETTO055254
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            Snow Peas and 3 more items
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#0B8C00',
              left: 11,
            }}>
            Order delivered on 20 nov
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#0B8C00',
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: '#0B8C00',
              top: -12,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', top: 80}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DADADA',
            height: 56,
            width: 56,
            borderRadius: 5,
            left: 22,
          }}>
          <Image
            style={{width: 25, height: 42, alignSelf: 'center', top: 7}}
            source={ImagePath.pickcat}
          />
        </View>

        <View style={{marginLeft: 40, top: 3}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#000000'}}>
            Order ID: PETTO055662
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            Snow Peas and 3 more items
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#0B8C00',
              left: 11,
            }}>
            Order delivered on 19 nov
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#0B8C00',
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: '#0B8C00',
              top: -12,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', top: 100}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DADADA',
            height: 56,
            width: 56,
            borderRadius: 5,
            left: 22,
          }}>
          <Image
            style={{width: 25, height: 42, alignSelf: 'center', top: 7}}
            source={ImagePath.pickcat}
          />
        </View>

        <View style={{marginLeft: 40, top: 3}}>
          <Text style={{fontSize: 10, fontWeight: '400', color: '#000000'}}>
            Order ID: PETTO055245
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            Snow Peas and 3 more items
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#0B8C00',
              left: 11,
            }}>
            Order delivered on 15 oct
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#0B8C00',
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: '#0B8C00',
              top: -12,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyOrders;
