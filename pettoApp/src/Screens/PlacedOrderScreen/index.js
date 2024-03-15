import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const PlacedOrderScreen = ({navigation}) => {
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
              PETTO055665
            </Text>
          </View>
        </View>
      </View>

      <View style={{padding: 22, top: -20}}>
        <Text style={{fontSize: 14, fontWeight: '700', color: '#888888'}}>
          Order Summery
        </Text>
      </View>

      <View style={{top: -60}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
          <View style={{}}>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              Snow Peas
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              ₹2,850
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', left: 22, marginTop: -20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, fontWeight: '700', color: 'black'}}>
              ₹950
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: '#888888',
                marginTop: 2,
                marginLeft: 4,
              }}>
              x 3
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#DADADA', marginLeft: 6, top: -2}}>|</Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: 'black',
                marginLeft: 6,
                marginTop: 2,
              }}>
              350gm
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#F5F5F5',
          width: 315,
          top: -43,
          left: 22,
        }}
      />

      <View style={{top: -50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
          <View style={{}}>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              Snow Peas
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              ₹2,850
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', left: 22, marginTop: -20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, fontWeight: '700', color: 'black'}}>
              ₹950
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: '#888888',
                marginTop: 2,
                marginLeft: 4,
              }}>
              x 3
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#DADADA', marginLeft: 6, top: -2}}>|</Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: 'black',
                marginLeft: 6,
                marginTop: 2,
              }}>
              350gm
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#F5F5F5',
          width: 315,
          top: -35,
          left: 22,
        }}
      />

      <View style={{top: -46}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
          <View style={{}}>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              Snow Peas
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
              ₹2,850
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', left: 22, marginTop: -20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, fontWeight: '700', color: 'black'}}>
              ₹950
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: '#888888',
                marginTop: 2,
                marginLeft: 4,
              }}>
              x 3
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#DADADA', marginLeft: 6, top: -2}}>|</Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: 'black',
                marginLeft: 6,
                marginTop: 2,
              }}>
              350gm
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#F5F5F5',
          width: 315,
          top: -32,
          left: 22,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 22,
          top: -38,
        }}>
        <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
          Total item (3)
        </Text>
        <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
          ₹6,200
        </Text>
      </View>

      <View>
        <Image
          style={{height: 88, width: 316, left: 22,top:-45}}
          source={ImagePath.Rectangle4444}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30,
            top:-155
          }}>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
            GST 20% (Included)
          </Text>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
            ₹ 1,240
          </Text>
        </View>
        
 <Image
 style={{width:316,height:1,left:22,top:-175}}
 source={ImagePath.Line}/> 

<View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30,
            top:-175
          }}>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
          SGST 10%
          </Text>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
          ₹
620
          </Text>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30,
            top:-275
          }}>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
          CGST 10%
          </Text>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#1F272D'}}>
            ₹ 620
          </Text>
        </View>
      </View>

      <View style={{marginLeft: 22,top:-250}}>
        <Text style={{fontSize: 14, fontWeight: '700', color: '#888888'}}>
          Delivery Address
        </Text>
      </View>

   
            <TouchableOpacity style={{marginTop: -237}}>
              <View
                style={{
                  borderWidth: 1,
                  height:116,
                  width: 316,
                  borderColor: '#F5F5F5',
                  borderRadius: 8,
                  marginLeft: 22,
                  backgroundColor: '#FFFFFF',
                }}>
                <View style={{marginLeft: 18, marginTop: 14, width: 140}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '700', color: '#1F272D'}}>
                Work
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
                 247 B-Anjani Nagar 
Airport Road indore (M.P.)
Madhya Pradesh 452001
                  </Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 230, top: 10}}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '400',
                        color: '#A9A9AA',
                        right: 8,
                        top: 1,
                      }}>
                      Deliver here
                    </Text>
                  </TouchableOpacity>
                  <Image
                    style={{height: 18, width: 18}}
                    source={ImagePath.rightred}
                  />
                </View>
              </View>
            </TouchableOpacity>
        

    </View>
  );
};
export default PlacedOrderScreen;
