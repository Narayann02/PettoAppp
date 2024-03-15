import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const user = [
  {
    id: 1,
    name: 'Erica Brewster',
    subheading: 'Lorem ipsum dolor sit amet',
    time: '12:30',
    number: '1',
    image: ImagePath.EricaBrewster,
  },
  {
    id: 2,
    name: 'Daisy Cronk',
    subheading: 'Lorem ipsum dolor amet consectetur',
    time: '12:30',
    number: '3',
    image: ImagePath.DaisyCronk,
  },
  {
    id: 3,
    name: 'Annie Lawson',
    subheading: 'Lorem ipsum dolor sit consectetur',
    time: 'Yesterday',
    number: '2',
    image: ImagePath.AnnieLawson,
  },
  {
    id: 4,
    name: 'Madeline Kohler',
    subheading: 'Lorem ipsum dolor sit amet, consectetur',
    time: 'Yesterday',
    image: ImagePath.MadelineKohler,
  },
  {
    id: 5,
    name: 'Keira Lindesay',
    subheading: 'Lorem ipsum dolor sit amet, consectetur',
    time: 'Yesterday',
    image: ImagePath.KeiraLindesay,
  },
  {
    id: 6,
    name: 'Layla Brockman',
    subheading: 'Lorem ipsum dolor sit amet, consectetur',
    time: '21 June',
    image: ImagePath.LaylaBrockman,
  },
  {
    id: 7,
    name: 'Leah Schlapp',
    subheading: 'Lorem ipsum dolor sit amet, consectetur',
    time: '20 June',
    image: ImagePath.LeahSchlapp,
  },
  {
    id: 8,
    name: 'Madeline Blomfield',
    subheading: 'Lorem ipsum dolor sit amet, consectetur',
    time: '18 June',
    image: ImagePath.MadelineBlomfield,
  },
  {
    id: 9,
    name: 'Maya Flood',
    subheading: 'Lorem ipsum dolor sit amet, consectetur',
    time: '15 June',
    image: ImagePath.MayaFlood,
  },
];

const HomeScreen1 = ({navigation}) => {

  const [IsScrolled,setIsScrolled]=useState(true);


  const handleScroll = () => {
    setIsScrolled(false);
    setTimeout(()=>{
        setIsScrolled(true);
    },1000)
  }
  return (
    <View>
      <View style={{backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" />
      </View>

      <View style={{marginLeft: 30, marginTop: 15}}>
        <Text style={{fontsize:28, fontWeight: '600', color: '#1D2226'}}>
          Chat
        </Text>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
        <ImageBackground
          style={{width:20, height:20, marginLeft: 316, marginTop: -25}}
          source={ImagePath.settingbar}>
      
          </ImageBackground>
      </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <View
            style={{
              borderBottomWidth: 1,
              borderWidth: 1,
              height: 40,
              width: 316,
              marginLeft: 22.28,
              borderRadius: 6,
              borderColor: '#F6F6F6',
              borderBottomColor: '#EEEEEE',
              backgroundColor: '#EEEEEE',
            }}
          />
          
        </View>
        <Image 
            style={{height:16,width:16,marginTop:-29,marginLeft:30}}
            source={ImagePath.seactrcbar_1} />
        <View style={{marginTop: -33, left: 50}}> 
          <TextInput style={{fontSize: 14}} placeholder="Searce" />
          
        </View>
<View>
<FlatList
            data={user}
            style={{marginBottom:'50%',paddingBottom:60}}
            renderItem={({item}) => (
              <>
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 0.7, marginLeft: 20}}>
                    <Image
                      style={{height: 50, width: 50}}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      flex: 1.5,
                      marginLeft: -40,
                    }}>
                    <Text
                      style={{fontSize: 15, color: 'black', fontWeight: '600'}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#666666',
                        fontWeight: '400',
                      }}>
                      {item.subheading}
                    </Text>
                  </View>
                  <View style={{marginRight: 25}}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '400',
                        color: '#999999',
                        top: 4,
                      }}>
                      {item.time}
                    </Text>

                    <View style={{justifyContent: 'flex-end', marginTop: 8}}>
                      {item.number ? (
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'white',
                            fontWeight: '400',
                            backgroundColor: '#38AFE7',
                            alignSelf: 'flex-end',
                            width: 20,
                            padding: 2,
                            borderRadius: 16,
                            height: 20,
                            paddingLeft: 7,
                          }}>
                          {item.number}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#E2E2E2',
                    left: 22,
                    marginRight: 22,
                    marginTop: 15,
                    width: 316,
                  }}
                />
              </>
            )}
          />

      <TouchableOpacity style={{position:"absolute",top:'68%'}} onPress={()=>navigation.navigate('HomeScreen2')}>
        <ImageBackground
          style={{height: 50, width: 180, marginLeft: 80, }}
          source={ImagePath.Button_back}
          imageStyle={{borderRadius: 6}}>
          <Text
            style={{
              fontSize: 15,
              color: '#ffffff',
              textAlign: 'center',
              fontWeight: '600',
              left: 5,
              top: 14,
            }}>
            Search Anonymous
          </Text>

          <ImageBackground 
          style={{height:14,width:14,top:-3,left:12}}
          source={ImagePath.system}>

          </ImageBackground>
        </ImageBackground>
        <View style={{marginTop: -100, left: 40}}>
          <ImageBackground
            style={{height: 40, width: 40, alignSelf: 'center'}}
            source={ImagePath.Mask_searce}></ImageBackground>
        </View>
      </TouchableOpacity>
</View>
         
    </View>
  );
};
export default HomeScreen1;
