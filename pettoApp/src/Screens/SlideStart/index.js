import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './styles';

const slides = [
  {
    key: 1,
    title: 'We deliver pet products across Bangalore.',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.',
    image: ImagePath.dog,
  },
  {
    key: 2,
    title: 'Nutrients for your pet to thrive.',
    text: 'In our pet food, you all find a variety of protein sources such as chicken, beef, lamb, and fish, as well as plant-based options like grains and soy.',
    image: ImagePath.cat,
  },
  {
    key: 3,
    title: 'Best products better service.',
    text: 'Purchase our 100% natural products—an ideal, healthier alternative for both pets and their owners.',
    image: ImagePath.reddog,
  },
];

const SlideStart = ({navigation}) => {
  // const [showSlider,setShowSlider]=useState(true);

  const renderItem = ({item},) => {
    return (
      // <View style={{flex: 1,}}>
      //   <View style={{flex: 1.8}}>
      //     <ImageBackground
      //       style={{width: 360, height: 476}}
      //       source={item.image}>
      //       <TouchableOpacity>
      //         <Text
      //           style={{
      //             fontSize: 14,
      //             fontWeight: '700',
      //             color: '#1F272D',
      //             alignSelf: 'flex-end',
      //             padding: 15,
      //           }}>
      //           Skip
      //         </Text>
      //       </TouchableOpacity>
      //     </ImageBackground>
      //   </View>

      //   <View style={{flex: 0.60, padding: 18, marginTop: 35}}>
      //     <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
      //       {item.title}
      //     </Text>
      //     <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
      //       {item.text}
      //     </Text>
      //   </View>

      //   <View style={{alignItems:'flex-end',padding:18}}>
      //   <LinearGradient colors={['#F14647','#F96D20']}>
      //       <View style={{height:48,width:48,borderRadius:100}}>

      //           <Image   style={{height:20,width:20,alignSelf:'center',margin:14}} source={ImagePath.auro}/>
      //       </View>
      //       </LinearGradient>
      //   </View>
      // </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, flex: 1.8}}>
          <ImageBackground
            source={item.image}
            style={{height: 476, width: 360}}>
            <TouchableOpacity
              style={{padding: 15, alignSelf: 'flex-end'}}
              >
              <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
                Skip
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{flex: 1, margin: 18, marginTop: 250}}>
          <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#888888'}}>
            {item.text}
          </Text>
        </View>

        <TouchableOpacity style={{marginLeft: 270, }} >
          <LinearGradient
            colors={['#F14647', '#F96D20']}
            style={{height: 48, width: 48, borderRadius: 50,margin:12}}>
            <Image
              style={{height: 20, width: 20, alignSelf: 'center', margin: 14}}
              source={ImagePath.auro}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppIntroSlider data={slides} renderItem={renderItem} 
      
     
      />
    </View>
  );
};

export default SlideStart;
