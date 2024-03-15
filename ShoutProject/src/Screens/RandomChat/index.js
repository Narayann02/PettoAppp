import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ButtonField from '../../helper/ButtonField';
import ApiserviceService from '../../services/Apiservice.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const user = [
  {
    id: 1,
    name: 'Yoga',
    check: 0,
  },
  {
    id: 1,
    name: 'Movies',
    check: 0,
  },
  {
    id: 1,
    name: 'Sports',
    check: 0,
  },

  {
    id: 1,
    name: 'Tea',
  },

  {
    id: 1,
    name: 'Travel',
    check: 0,
  },

  {
    id: 1,
    name: 'Music',
    check: 0,
  },

  {
    id: 1,
    name: 'Gardning',
    check: 0,
  },

  {
    id: 1,
    name: 'Gardening',
    check: 0,
  },
  {
    id: 1,
    name: 'Swimming',
  },

  {
    id: 1,
    name: 'Art',
    check: 0,
  },

  {
    id: 1,
    name: 'Photography',
    check: 0,
  },

  {
    id: 1,
    name: 'Video Games',
    check: 0,
  },
];

const RandomChat = ({navigation}) => {
  const [userId, setuserId] = useState('');
  const [username, setusername] = useState('');

  const [gender, setgender] = useState('');

  const [year, setyear] = useState('');
  const [country, setcountry] = useState('');
  const [name, setname] = useState('');
  const [strangerid, setstrangerid] = useState('');
  // const [userid, setuserid] = useState('');
  // const [likedislike, setlikedislike] = useState(likesdis);

  useEffect(() => {
    AsyncStorage.getItem('UserID', (err, cre) => {
      setuserId(cre), getrandomchat(cre);
    });
  }, []);
  const getrandomchat = async userID => {
    let url = `getRandomUsers?user_id=1`;
    ApiserviceService.Getapi(url)
      .then(response => {
        console.log('response-->', response.data);

        setusername(response.data.data.user_name);
        setname(response.data.data.name);
        setyear(response.data.data.age);
        setcountry(response.data.data.country);
        setstrangerid(response.data.data.id);
      })
      .catch(e => {})
      .finally(() => {});
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          left: 47,
          top: 50,
          color: '#1D2226',
        }}>
        Random Chat
      </Text>
      <View>
        <TouchableOpacity>
          <ImageBackground
            style={{height: 15, width: 15, left: 22, top: 33}}
            source={ImagePath.Arrow_left}></ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={{left: 22, marginTop: 70}}>
        <Text style={{color: '#777A7D', fontSize: 12, fontWeight: '400'}}>
          Gender
        </Text>
      </View>

      <TouchableOpacity>
        <ImageBackground
          style={{
            height: 93,
            width: 93,
            left: 22,
            top: 8,
            borderRadius: 5,
            border: 1,
            borderColor: '#F6F6F6',
            backgroundColor: '#EEEEEE',
          }}
          source={ImagePath.Male}></ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: -93, marginRight: 82}}>
        <ImageBackground
          style={{height: 93, width: 93, left: 42, top: 8, borderRadius: 5}}
          source={ImagePath.Rectangle}>
          <ImageBackground
            style={{height: 40, width: 40, alignSelf: 'center', top: 20}}
            source={ImagePath.baby}></ImageBackground>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: '#FFFFFF',
              alignSelf: 'center',
              top: 28,
            }}>
            Female
          </Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'center', left: 112, top: -85}}>
        <ImageBackground
          style={{
            height: 93,
            width: 93,
            borderColor: '#EEEEEE',
            backgroundColor: '#F6F6F6',
            borderRadius: 5,
            border: 1,
          }}
          source={ImagePath.FemaleAll}>
          <ImageBackground
            style={{height: 40, width: 62, alignSelf: 'center', top: 20}}
            source={ImagePath.Couple}></ImageBackground>
        </ImageBackground>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            left: 22,
            marginTop: -50,
            color: '#777A7D',
          }}>
          Age
        </Text>
      </View>
      <View style={{marginTop: -20}}>
        <ImageBackground
          style={{height: 20, width: 20, marginLeft: 22}}
          source={ImagePath.Gola}></ImageBackground>
        <Text
          style={{fontSize: 14, fontWeight: '400', color: '#1D2226', left: 23}}>
          18
        </Text>
      </View>

      <View>
        <ImageBackground
          style={{width: 86, height: 4, left: 24, top: -30}}
          source={ImagePath.Rectangledark}></ImageBackground>
      </View>
      <View style={{left: 70, top: -43}}>
        <ImageBackground
          style={{height: 20, width: 20, marginLeft: 22}}
          source={ImagePath.Gola}></ImageBackground>
        <Text
          style={{fontSize: 14, fontWeight: '400', color: '#1D2226', left: 23}}>
          28
        </Text>
      </View>
      <View>
        <ImageBackground
          style={{height: 4, width: 316, left: 91, marginTop: -73}}
          source={ImagePath.Rectanglewhite}></ImageBackground>
      </View>

      <View>
        <Text
          style={{fontSize: 12, fontWeight: '400', color: '#777A7D', left: 22}}>
          Interest
        </Text>

        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderBottomWidth: 1,

            borderColor: '#3498DB',
            // color: '#F08080',
            backgroundColor: '#3498DB',
            height: 40,
            width: 80,
            marginTop: 15,
            marginLeft: 41,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              alignSelf: 'center',
              padding: 8,
              fontWeight: '600',
            }}>
            Yoga
          </Text>
        </View>

        <View style={{alignSelf: 'center', marginTop: -90, marginLeft: 80}}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderBottomWidth: 1,

              borderColor: '#CBCFD2',
              color: '#F08080',
              // backgroundColor: '"#EEEEEE',
              height: 40,
              width: 80,
              marginTop: 50,
              marginLeft: 32,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                alignSelf: 'center',
                padding: 8,
                fontWeight: '400',
              }}>
              Movie
            </Text>
          </View>

          <View style={{marginLeft: 100, marginTop: -90, marginRight: -10}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderBottomWidth: 1,

                borderColor: '#CBCFD2',
                color: '#E6E8EA',
                // backgroundColor: '#E6E8EA',
                height: 40,
                width: 80,
                marginTop: 50,
                marginLeft: 32,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  alignSelf: 'center',
                  padding: 8,
                  fontWeight: '400',
                }}>
                Sports
              </Text>
            </View>
          </View>

          <View style={{marginTop: -30}}>
            <View style={{marginLeft: -100}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#CBCFD2',
                  color: '#F08080',
                  // backgroundColor: '#3498DB',
                  height: 40,
                  width: 55,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '400',
                  }}>
                  Tea
                </Text>
              </View>
            </View>

            <View style={{marginTop: -90, marginLeft: -25}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#3498D8',
                  // color: '#F08080',
                  backgroundColor: '#3498DB',
                  height: 40,
                  width: 85,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '600',
                  }}>
                  Travel
                </Text>
              </View>
            </View>

            <View style={{marginLeft: 80, marginTop: -90}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#CBCFD2',
                  color: '#F0F2F4',
                  // backgroundColor: '#F0F2F4',
                  height: 40,
                  width: 80,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '400',
                  }}>
                  Music
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: -30}}>
            <View style={{marginLeft: -100}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#CBCFD2',
                  color: '#F08080',
                  // backgroundColor: '#3498DB',
                  height: 40,
                  width: 100,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '400',
                  }}>
                  Gardening
                </Text>
              </View>
            </View>

            <View style={{marginTop: -90, marginLeft: 20}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#CBCFD2',
                  color: '#F08080',
                  // backgroundColor: '#3498DB',
                  height: 40,
                  width: 100,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '400',
                  }}>
                  Swimming
                </Text>
              </View>
            </View>

            <View style={{marginTop: -90, marginLeft: 140}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#3498DB',
                  // color: '#F08080',
                  backgroundColor: '#3498DB',
                  height: 40,
                  width: 55,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '600',
                  }}>
                  Art
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: -30}}>
            <View style={{marginLeft: -100}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#CBCFD2',
                  color: '#F08080',
                  // backgroundColor: '#3498DB',
                  height: 40,
                  width: 120,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '400',
                  }}>
                  Photography
                </Text>
              </View>
            </View>

            <View style={{marginTop: -90, marginLeft: 40}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderBottomWidth: 1,

                  borderColor: '#3498DB',
                  // color: '#F08080',
                  backgroundColor: '#3498DB',
                  height: 40,
                  width: 120,
                  marginTop: 50,
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    alignSelf: 'center',
                    padding: 8,
                    fontWeight: '600',
                  }}>
                  Video games
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 35, marginRight: 9, marginLeft: -65}}>
            <TouchableOpacity>
              <ButtonField
                label={'Continue'}
                submitfun={() => navigation.navigate('submitfun')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{ position: "relative" }}>
                            
                                
    
      
    
    
      </View> */}
        <TouchableOpacity
          style={{top: 220}}
          onPress={() => navigation.navigate('Newchat')}>
          <Image
            style={{height: 50, width: 316, left: 22, borderRadius: 8}}
            source={ImagePath.Button_back}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: 'white',
              top: -35,
              left: 150,
            }}>
            Start chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RandomChat;
