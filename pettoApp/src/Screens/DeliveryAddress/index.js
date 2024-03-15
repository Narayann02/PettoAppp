import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const valuedata = [
  {
    id: 1,
    name: 'Work',
    address:
      '247 B-Anjani Nagar Airport Road indore (M.P.)Madhya Pradesh 452001',
  },

  {
    id: 2,
    name: 'Home',
    address:
      '247 B-Anjani Nagar Airport Road indore (M.P.)Madhya Pradesh 452001',
  },
];

const DeliveryAddress = ({navigation}) => {
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
              Checkout
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginLeft: 22}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#888888'}}>
          Delivery Address
        </Text>
      </View>

      <FlatList
        data={valuedata}
        horizontal={true}
        renderItem={({item}) => (
          <>
            <TouchableOpacity style={{marginTop: 10}}>
              <View
                style={{
                  borderWidth: 1,
                  height: 116,
                  width: 237,
                  borderColor: '#F5F5F5',
                  borderRadius: 8,
                  marginLeft: 22,
                  backgroundColor: '#FFFFFF',
                }}>
                <View style={{marginLeft: 18, marginTop: 14, width: 140}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '700', color: '#1F272D'}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
                    {item.address}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 155, top: -3}}>
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
          </>
        )}
      />

      <TouchableOpacity style={{top:105}}>
        <View style={{marginLeft: 22, top: -300}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#F5F5F5',

              height: 38,
              width: 316,
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#1F272D',
                alignSelf: 'center',
                top: 10,
              }}>
              + Add New
            </Text>
          </View>
        </View>
      </TouchableOpacity>


      {/* <View style={{marginTop:0}}> */}

      <View style={{padding: 22, top:-195}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#888888'}}>
          Order Summery
        </Text>
      </View>


      <View  style={{top:-235}}>

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
          top: -225,
          left: 22,
        }}
      />




<View  style={{top:-173}}>

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
    top: -225,
    left: 22,
  }}
/>



<View  style={{top:-300}}>

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
    top: -225,
    left: 22,
  }}
/>
{/* </View> */}

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-110,padding:22}}>
  
    <Text  style={{fontSize:12,fontWeight:'700',color:'#1F272D'}}>Total item (3)</Text>
    <Text  style={{fontSize:14,fontWeight:'700',color:'#1F272D'}}>₹6,200</Text>
</View>





<TouchableOpacity  onPress={()=>navigation.navigate('PaymentScreen')} >
<View style={{backgroundColor:'#F14647',height:50,width:316,borderRadius:10,left:22,marginTop:-5}}>

<Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',alignSelf:'center',marginTop:12}}>
Checkout</Text>


</View>
</TouchableOpacity>




    </View>
  );
};
export default DeliveryAddress;
