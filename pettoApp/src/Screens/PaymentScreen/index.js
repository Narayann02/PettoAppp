import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const valuedata = [
  {
    id: 1,
    name: 'Phone pay',
    Image: ImagePath.phonepe,
  },

  {
    id: 2,
    name: 'Google Pay',
    Image: ImagePath.Gpay,
  },
  {
    id: 3,
    name: 'BHIM UPI',
    Image: ImagePath.upi,
  },
];
  
const NetBanking = [
  {
    id: 1,
    name: 'HDFC',
    Image: ImagePath.HDFC,
  },

  {
    id: 2,
    name: 'SBI',
    Image: ImagePath.SBI,
  },
  {
    id: 3,
    name: 'Axis',
    Image: ImagePath.Axis,
  },

];

const PaymentScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 22,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('OrderConfirm')}>
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
              Payment
            </Text>
          </View>
        </View>
      </View>
      
     <FlatList
       data={[{name: 'cdhchd'}]}
       renderItem={({item}) =>(
<>

      <View style={{marginBottom: 0, paddingBottom: 0}}>
        <View style={{left: 22, top: -8}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#06161C'}}>
            Bill Total: ₹6,200{' '}
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#9D9D9D',
            width: 316,
            top: 10,
            left: 22,
          }}
        />
        
        <View style={{marginTop: 25, left: 22}}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#06161C'}}>
                  UPI
                </Text>
              </View>
        <FlatList
          data={valuedata}
          renderItem={item => (
            <>

              <TouchableOpacity style={{marginLeft: 22, top: 12}}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 47,
                    width: 47,
                    borderRadius: 6,
                  }}>
                  <Image
                    style={{
                      height: 29,
                      width: 29,
                      alignSelf: 'center',
                      marginTop: 8,
                    }}
                    source={item.Image}
                  />
                </View>
              </TouchableOpacity>

              <View style={{marginTop: -22, left: 90}}>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                  {item.name}
                </Text>
              </View>

              <View style={{marginTop: -18, left: 325}}>
                <Image
                  style={{height: 18, width: 18, top: 4}}
                  source={ImagePath.leftblack}
                />
              </View>

               {/* <TouchableOpacity style={{marginLeft: 22, top: 26}}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 47,
                    width: 47,
                    borderRadius: 6,
                  }}>
                  <Image
                    style={{
                      height: 11,
                      width: 33,
                      alignSelf: 'center',
                      marginTop: 18,
                    }}
                    source={item.Image}
                  />
                </View>
              </TouchableOpacity>

              <View style={{marginTop: -22, left: 90}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                    top: 13,
                  }}>
                  {item.name}
                </Text>
              </View>

              <View style={{marginTop: -18, left: 325}}>
                <Image
                  style={{height: 18, width: 18, top: 18}}
                  source={ImagePath.leftblack}
                />
              </View>

              <TouchableOpacity style={{marginLeft: 22, top: 40}}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 47,
                    width: 47,
                    borderRadius: 6,
                  }}>
                  <Image
                    style={{
                      height: 10,
                      width: 33,
                      alignSelf: 'center',
                      marginTop: 18,
                    }}
                    source={item.Image}
                  />
                </View>
              </TouchableOpacity>

              <View style={{marginTop: -22, left: 90}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                    top: 26,
                  }}>
                 {item.name}
                </Text>
              </View>

              <View style={{marginTop: -18, left: 325}}>
                <Image
                  style={{height: 18, width: 18, top: 30}}
                  source={ImagePath.leftblack}
                />
              </View>

              <View style={{marginTop: 58}}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#9D9D9D',
                    width: 316,
                    top: 10,
                    left: 22,
                  }}
                />
              </View> */}
            </>
          )}
        />

        <View style={{left: 22, top: 24}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#06161C'}}>
            Cards
          </Text>
        </View>
        <TouchableOpacity style={{marginLeft: 22, top: 35}}>
          <View
            style={{
              backgroundColor: '#F5F5F5',
              height: 47,
              width: 47,
              borderRadius: 6,
            }}>
            <Image
              style={{
                height: 18,
                width: 33,
                alignSelf: 'center',
                marginTop: 14,
              }}
              source={ImagePath.credit}
            />
          </View>
        </TouchableOpacity>

        <View style={{marginTop: -22, left: 90}}>
          <Text
            style={{fontSize: 14, fontWeight: '500', color: 'black', top: 25}}>
            Add Credit, Debit & ATM cards
          </Text>
        </View>

        <View style={{marginTop: -18, left: 325}}>
          <Image
            style={{height: 18, width: 18, top: 28}}
            source={ImagePath.leftblack}
          />
        </View>

<FlatList 
data={NetBanking}
renderItem={({item})=>(
<>

        <View style={{top: 28}}>
          <View style={{marginTop: 25, left: 22, top: 0}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#06161C'}}>
            Net Banking
            </Text>
          </View>

          <TouchableOpacity style={{marginLeft: 22, top: 12}}>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                height: 47,
                width: 47,
                borderRadius: 6,
              }}>
              <Image
                style={{
                  height: 27,
                  width: 29,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
                source={item.Image}
              />
            </View>
          </TouchableOpacity>

          <View style={{marginTop: -22, left: 90}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              {item.name}
            </Text>
          </View>

          <View style={{marginTop: -18, left: 325}}>
            <Image
              style={{height: 18, width: 18, top: 4}}
              source={ImagePath.leftblack}
            />
          </View>

          <TouchableOpacity style={{marginLeft: 22, top: 26}}> 
            <View
              style={{
                backgroundColor: '#F5F5F5',
                height: 47,
                width: 47,
                borderRadius: 6,
              }}>
              <Image
                style={{
                  height: 32,
                  width: 32,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
                source={item.Image}
              />
            </View>
          </TouchableOpacity>

          <View style={{marginTop: -22, left: 90}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: 'black',
                top: 13,
              }}>
              {item.name}
            </Text>
          </View>

          <View style={{marginTop: -18, left: 325}}>
            <Image
              style={{height: 18, width: 18, top: 18}}
              source={ImagePath.leftblack}
            />
          </View> 

          <TouchableOpacity style={{marginLeft: 22, top: 40}}>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                height: 47,
                width: 47,
                borderRadius: 6,
              }}>
              <Image
                style={{
                  height: 29,
                  width: 34,
                  alignSelf: 'center',
                  marginTop: 8,
                }}
                source={item.Image}
              />
            </View>
          </TouchableOpacity>

          <View style={{marginTop: -22, left: 90}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: 'black',
                top: 26,
              }}>
              {item.name}
            </Text>
          </View>

          <View style={{marginTop: -18, left: 325}}>
            <Image
              style={{height: 18, width: 18, top: 30}}
              source={ImagePath.leftblack}
            />
          </View>

          <View style={{marginTop: 58}}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#9D9D9D',
                width: 316,
                top: 10,
                left: 22,
              }}
            />
          </View>
        </View>
        </>

)}
/>

        <View style={{left: 22, top: 54}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#06161C'}}>
            Pay on delivery
          </Text>
        </View>
        <TouchableOpacity style={{marginLeft: 22, top: 35}}>
          <View
            style={{
              backgroundColor: '#F5F5F5',
              height: 47,
              width: 47,
              borderRadius: 6,
            }}>
            <Image
              style={{
                height: 18,
                width: 33,
                alignSelf: 'center',
                marginTop: 14,
              }}
              source={ImagePath.credit}
            />
          </View>
        </TouchableOpacity>

        <View style={{marginTop: -22, left: 90}}>
          <Text
            style={{fontSize: 14, fontWeight: '500', color: 'black', top: 25}}>
            Add Credit, Debit & ATM cards
          </Text>
        </View>

        <View style={{marginTop: -18, left: 325}}>
          <Image
            style={{height: 18, width: 18, top: 28}}
            source={ImagePath.leftblack}
          />
        </View>
      </View>


      </>

       )}
/>
    </View>
  );
};
export default PaymentScreen;
