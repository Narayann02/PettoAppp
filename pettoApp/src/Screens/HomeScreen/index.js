import React,{useState,useEffect} from 'react';
import {
  Image,
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
// import ImagePath from '../../../constants/ImagePath';
import ImagePath from '../../constants/ImagePath';
import { setProfileData} from '../../redux/index';
import { useSelector, useDispatch } from 'react-redux';


const Populardata = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const Profilestate = useSelector((state) => state.ProfileReducer.data);
  console.log('Profiledata---------------',Profilestate);
  useEffect(() => {
    dispatch(setProfileData());
}, [])




  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{height: 50, width: 50}}
              source={ImagePath.AnanyaSinghania}
              resizeMode="cover"
            />
          </View>
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#888888',
              }}>
              Welcome back
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#2D2E43',
              }}>
              Ananya Singhania!
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Image
            style={{height: 22, width: 22}}
            source={ImagePath.searceblack}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={[{name: 'cdhchd'}]}
        renderItem={({item}) => (
          <>
            <View style={{left: 22, marginRight: 90, top: -30}}>
              <Text
                style={{fontSize: 24, fontVariant: '700', color: '#1F272D'}}>
                Find best products for your pet
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: -4,
                }}>
                Pet Category
              </Text>
            </View>
            <View style={{flexDirection: 'row', top: 2}}>
              <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen2')}>
                <View
                  style={{
                    backgroundColor: '#FFEAEA',
                    height: 150,
                    width: 150,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{
                      width: 90,
                      height: 123,
                      alignSelf: 'center',
                      top: 12,
                    }}
                    source={ImagePath.dog_1}
                  />
                </View>
                <View style={{left: 83, top: 2}}>
                  <Text
                    style={{fontSize: 12, fontWeight: '500', color: 'black'}}>
                    Dogs
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{left: 17}}>
                <View
                  style={{
                    backgroundColor: '#FFE3CD',
                    height: 150,
                    width: 150,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{
                      width: 74,
                      height: 119,
                      alignSelf: 'center',
                      top: 12,
                    }}
                    source={ImagePath.cat9}
                  />
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: 'black',
                      left: 83,
                    }}>
                    Cats
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{top: 25}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: -12,
                }}>
                Popular Foods
              </Text>
            </View>
            <View style={{marginTop:20}}>
              <FlatList
                data={Populardata}
                style={{}}
                horizontal={true}
                renderItem={({item}) => (
                  <TouchableOpacity style={{marginRight:15}}>
                    <View
                      style={{
                        backgroundColor: '#F5F5F5',
                        height: 226,
                        width: 150,
                        left: 22,
                        borderRadius: 10,
                      }}>
                      <Image
                        style={{
                          width: 82,
                          height: 128,
                          alignSelf: 'center',
                          top: 30,
                        }}
                        source={ImagePath[322]}
                      />
                    </View>
                    <View style={{top: -55, left: 50}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: 'black',
                        }}>
                        Fidele Puppi
                      </Text>
                      <Text style={{color: 'black', left: 20}}>₹ 450</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={{flexDirection: 'row', top: 18}}>
              <View style={{top: 17, left: 98}}>
                <Image
                  style={{height: 9, width: 9, left: 80, top: -38}}
                  source={ImagePath.right}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#888888',
                    left: 24,
                    top: -53,
                  }}>
                  View all
                </Text>
              </View>

              <TouchableOpacity style={{left: -30}}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 226,
                    width: 150,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <ImageBackground
                    style={{
                      width: 80,
                      height: 135,
                      alignSelf: 'center',
                      top: 23,
                    }}
                    source={ImagePath.food_21}></ImageBackground>
                </View>
                <View style={{top: -55, left: -22}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: 'black',
                      left: 83,
                      top: 0,
                    }}>
                    Snow Peas
                  </Text>
                  <Text style={{color: 'black', left: 100}}>₹ 950</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{top: 17}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: -12,
                }}>
                Popular Shampoo
              </Text>
            </View>

            <View style={{flexDirection: 'row', top: -20}}>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 226,
                    width: 150,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{
                      width: 70,
                      height: 131,
                      alignSelf: 'center',
                      top: 30,
                    }}
                    source={ImagePath.shampoo1}
                  />
                </View>
                <View style={{top: -55, left: 50}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    Silky Oatmeal
                  </Text>
                  <Text style={{color: 'black', left: 20}}>₹ 450</Text>
                </View>
              </TouchableOpacity>

              <View style={{top: 17, left: 98}}>
                <Image
                  style={{height: 9, width: 9, left: 80, top: -38}}
                  source={ImagePath.right}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#888888',
                    left: 24,
                    top: -53,
                  }}>
                  View all
                </Text>
              </View>

              <TouchableOpacity style={{left: -30}}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 226,
                    width: 150,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <ImageBackground
                    style={{
                      width: 70,
                      height: 119,
                      alignSelf: 'center',
                      top: 40,
                    }}
                    source={ImagePath.shampoo2}></ImageBackground>
                </View>
                <View style={{top: -55, left: -22}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: 'black',
                      left: 83,
                      top: 0,
                    }}>
                    Snow Peas
                  </Text>
                  <Text style={{color: 'black', left: 100}}>₹ 950</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{top: 17}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: -12,
                }}>
                Other Products
              </Text>
            </View>

            <View style={{flexDirection: 'row', top: 12}}>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 82,
                    width: 183,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{height: 29, width: 40, top: 30, left: 10}}
                    source={ImagePath.viru}
                  />
                </View>
                <View style={{top: -70, left: 80}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    HUFT Bowl
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '400',
                      color: '#888888',
                      marginRight: 40,
                      width: 100,
                    }}>
                    Vitapol Economic Bird Food for Budgie
                  </Text>
                  <Text style={{color: 'black', left: 0}}>₹ 250</Text>
                </View>
              </TouchableOpacity>

              <View style={{top: 17, left: 98}}>
                <Image
                  style={{height: 9, width: 9, left: 50, top: -38}}
                  source={ImagePath.right}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#888888',
                    left: -8,
                    top: -53,
                  }}>
                  View all
                </Text>
              </View>

              <TouchableOpacity style={{left: -30}}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: 82,
                    width: 183,
                    left: 22,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{height: 26, width: 42, top: 30, left: 5}}
                    source={ImagePath.jai}
                  />
                </View>
                <View style={{top: -72, left: -15}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: 'black',
                      left: 83,
                      top: 0,
                    }}>
                    Dog Raincote
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '400',
                      color: '#888888',
                      width: 100,
                      left: 85,
                    }}>
                    Vitapol Economic Bird Food for Guinea Pig
                  </Text>
                  <Text style={{color: 'black', left: 85}}>₹ 250</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{top: -80, left: 175}}>
              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    backgroundColor: '#F14647',
                    backgroundColor: '#F96D20',
                  }}>
                  <Image
                    style={{
                      width: 18,
                      height: 24,
                      alignSelf: 'center',
                      top: 12,
                    }}
                    source={ImagePath.vvv}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default HomeScreen;
