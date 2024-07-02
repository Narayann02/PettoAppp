import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ApiDataService from '../../services/ApiDataService';
// import {shouldUseActivityState} from 'react-native-screens';
import { UseSelector,DispatchProp, useDispatch, useSelector } from 'react-redux';
import { setProfileData } from '../../redux';

const Populardata = [
  {
    id: 1,
    name: 'Fidele Puppi',
    price: '₹450',
    Image: ImagePath[322],
  },
  {
    id: 2,
    name: 'Snow Peas',
    price: '₹950',
    Image: ImagePath.food_21,
  },
  {
    id: 3,
    name: 'Snow Peas',
    price: '₹950',
    Image: ImagePath.food_21,
  },
];

const regulardata = [
  {
    id: 1,
    name: 'Silky Oatmeal',
    price: '₹450',
    Image: ImagePath.shampoo1,
  },
  {
    id: 1,
    name: 'Snow Peas',
    price: '₹950',
    Image: ImagePath.shampoo2,
  },
  {
    id: 1,
    name: 'Snow Peas',
    price: '₹950',
    Image: ImagePath.shampoo2,
  },
];

const superdata = [
  {
    id: 1,
    Image: ImagePath.viru,
    name: 'HUFT Bowl',
    price: '₹250',
    sunheading: 'Vitapol Economic Bird Food for Budgie',
  },
  {
    id: 2,
    Image: ImagePath.jai,
    name: 'Snow Peas',
    sunheading: 'Vitapol Economic Bird Food for Guinea Pig',
    price: '₹250',
  },
  {
    id: 3,
    Image: ImagePath.jai,
    name: 'Snow Peas',
    sunheading: 'Vitapol Economic Bird Food for Guinea Pig',
    price: '₹250',
  },
];

const HomeScreen2 = ({navigation}) => {

const dispatch = useDispatch();
const Profilestate = useSelector((state)=>state.ProfileReducer.data);


  const [petcategory, setpetcategory] = useState(' ');

  const [popularfoods, setpopularfoods] = useState(' ');

  const [popularshampoo, setpopularshampoo] = useState(' ');

  const [otherproducts, setotherproduct] = useState(' ');




  const gethomedetail = () => {
    let url = `home/`;
    ApiDataService.GetTokenapi(url)
      .then(response => {
        console.log('response------------>',response)
        setpetcategory(response.data.pet_category);
        setpopularfoods(response.data.popular_foods);
        setpopularshampoo(response.data.popular_shampoo);
        setotherproduct(response.data.other_products);
      })
      .catch(e => {});
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingBottom: '-20%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 18,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{height: 52, width: 52}}
              source={ImagePath.AnanyaSinghania}
              resizeMode="cover"
            />
          </View>

          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#888888',
              }}>
              Welcome back
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#2D2E43',
              }}>
              Ananya Singhania!
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Image
            style={{height: 24, width: 24}}
            source={ImagePath.searceblack}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginBottom: '-35%'}}
        data={[{name: 'cdhchd'}]}
        renderItem={({item}) => (
          <>
            <View style={{left: 22, marginRight: 60, top: -5}}>
              <Text style={{fontSize: 25, fontWeight: '700', color: '#1F272D'}}>
                Find best products for your pet
              </Text>
            </View>
            <View style={{top: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: -4,
                }}>
                Pet Category
              </Text>
            </View>
            <View style={{flexDirection: 'row', top: 12}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen3')}>
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
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: 6,
                }}>
                Popular Foods
              </Text>
            </View>

            <View>
              <FlatList
                data={Populardata}
                style={{}}
                horizontal={true}
                renderItem={({item}) => (
                  <TouchableOpacity style={{marginRight: 15, top: 40}}>
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
                        source={item.Image}
                      />
                    </View>
                    <View style={{top: -55, left: 50}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: 'black',
                        }}>
                        {item.name}
                      </Text>
                      <Text style={{color: 'black', left: 20}}>
                        {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
              <View style={{flexDirection: 'row', top: -229, left: 150}}>
                <View style={{top: 17, left: 98}}>
                  <Image
                    style={{height: 9, width: 9, left: 80, top: -38}}
                    source={ImagePath.right}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#888888',
                      left: 24,
                      top: -53,
                    }}>
                    View all
                  </Text>
                </View>
              </View>

              <View style={{top: 17}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#888888',
                    left: 24,
                    top: -12,
                  }}>
                  Popular Shampoo
                </Text>
              </View>
            </View>
            <View>
              <FlatList
                data={regulardata}
                style={{}}
                horizontal={true}
                renderItem={({item}) => (
                  <TouchableOpacity style={{marginRight: 15, top: 15}}>
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
                        source={item.Image}
                      />
                    </View>
                    <View style={{top: -55, left: 50}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: 'black',
                        }}>
                        {item.name}
                      </Text>
                      <Text style={{color: 'black', left: 20}}>
                        {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
              <View style={{flexDirection: 'row', top: -255, left: 150}}>
                <View style={{top: 17, left: 98}}>
                  <Image
                    style={{height: 9, width: 9, left: 80, top: -38}}
                    source={ImagePath.right}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#888888',
                      left: 24,
                      top: -53,
                    }}>
                    View all
                  </Text>
                </View>
              </View>
            </View>

            <View style={{top: 17}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#888888',
                  left: 24,
                  top: -30,
                }}>
                Other Products
              </Text>
            </View>

            <View style={{top: -18}}>
              <FlatList
                data={superdata}
                style={{}}
                horizontal={true}
                renderItem={({item}) => (
                  <TouchableOpacity style={{marginRight: 15, top: 15}}>
                    <View
                      style={{
                        backgroundColor: '#F5F5F5',
                        height: 83,
                        width: 182,
                        left: 22,
                        borderRadius: 10,
                      }}>
                      <Image
                        style={{
                          width: 40,
                          height: 29,
                          alignSelf: 'center',
                          top: 34,
                          right: 60,
                        }}
                        source={item.Image}
                      />
                    </View>
                    <View style={{top: -70, left: 50}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: 'black',
                          left: 30,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          left: 50,
                          top: 25,
                          fontWeight: '700',
                          fontSize: 14,
                        }}>
                        {item.price}
                      </Text>

                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '400',
                          color: '#888888',
                          width: 100,
                          top: -20,
                          left: 30,
                        }}>
                        {item.sunheading}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
              <View style={{flexDirection: 'row', top: -138, left: 150}}>
                <View style={{top: 17, left: 98}}>
                  <Image
                    style={{height: 9, width: 9, left: 80, top: -38}}
                    source={ImagePath.right}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#888888',
                      left: 24,
                      top: -53,
                    }}>
                    View all
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      />

      <View style={{top: -10, left: 160}}>
        <TouchableOpacity>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: '#F14647',
              backgroundColor: '#F96D20',
            }}>
            <Image
              style={{
                width: 20,
                height: 26,
                alignSelf: 'center',
                top: 15,
              }}
              source={ImagePath.vvv}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen2;
