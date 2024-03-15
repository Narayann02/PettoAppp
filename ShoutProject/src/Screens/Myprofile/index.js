import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiserviceService from '../../services/Apiservice.service';
import ButtonField from '../../helper/ButtonField';
const Myprofile = ({navigation}) => {
  const [name, setname] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [datee, setdatee] = useState('');
  const [facephoto, setfacephoto] = useState('');
  const [country, setcountry] = useState('');
  const [userId, setuserId] = useState('');
  const [email, setemail] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('userID', (err, cre) => {
      let userID = JSON.parse(cre);
      setuserId(userID);
      getprofile(userID);
    });
  }, []);

  const getprofile = userID => {
    let url = `getProfile?user_id=${userID}`;
    ApiserviceService.Getapi(url)
      .then(response => {
        console.log('response--->', response.data);

        setname(response.data.data.name);
        setemail(response.data.data.email);
        setphonenumber(response.data.data.phone);
        setdatee(response.data.data.dob);
        setcountry(response.data.data.country);
      })
      .catch(e => {})
      .finally(() => {});
  };

  const submitfun = () => {
    let formdata = {
      user_id: 1,
      name: name,
      email: email,
      phone: phonenumber,
      dob: datee,
      country: country,
    };


    // console.log(formdata);
    let url = 'updateProfile';
    ApiserviceService.Postapi(url,formdata)
      .then(response => {
        console.log('response----->>>', response);
        if (response.status == true) {
          navigation.navigate('ChangePassword');
          console.log('res----->>>', response);
        }
      })
      .catch(e => {});
  };
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <ImageBackground
          style={{height: 15, width: 15, left: 22, top: 30}}
          source={ImagePath.Arrow_left}></ImageBackground>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#1D2226',
            left: 47.37,
            top: 11,
          }}>
          My profile
        </Text>
      </TouchableOpacity>
      <ImageBackground
        style={{height: 90, width: 90, left: 135, top: 35}}
        source={ImagePath.vinson}>
        <ImageBackground
          style={{height: 30, width: 30, left: 70, top: 50}}
          source={ImagePath.scanner}></ImageBackground>
      </ImageBackground>

      <View style={{top: -25}}>
        <Text style={{fontSize: 12, fontWeight: 400, left: 22, top: 95}}>
          Name
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 50,
            width: 316,
            left: 22,
            top: 100,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              left: 22,
            }}
            placeholder=" Vinson Cooper"
            onChangeText={text => setname(text)}
            value={name}
          />
        </View>
      </View>

      <View style={{top: -6}}>
        <Text style={{fontSize: 12, fontWeight: 400, left: 22, top: 95}}>
          Email id
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 50,
            width: 316,
            left: 22,
            top: 100,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              left: 22,
            }}
            placeholder="vinsoncooper123@gmail.com"
            onChangeText={text => setemail(text)}
            value={email}
          />
        </View>
      </View>

      <View style={{top: 13}}>
        <Text style={{fontSize: 12, fontWeight: 400, left: 22, top: 95}}>
          Phone number
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 50,
            width: 316,
            left: 22,
            top: 100,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              left: 22,
            }}
            placeholder=" +91 98745 63210"
            onChangeText={text => setphonenumber(text)}
            value={phonenumber}
          />
        </View>
      </View>

      <View style={{top: 30}}>
        <Text style={{fontSize: 12, fontWeight: 400, left: 22, top: 95}}>
          Date of birth
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 50,
            width: 316,
            left: 22,
            top: 100,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              left: 22,
            }}
            placeholder="24 June 2000"
            onChangeText={text => setdatee(text)}
            value={datee}
          />
        </View>
      </View>

      <View style={{top: 48}}>
        <Text style={{fontSize: 12, fontWeight: 400, left: 22, top: 95}}>
          Country
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 50,
            width: 316,
            left: 22,
            top: 100,
            borderRadius: 6,
            backgroundColor: '#EEEEEE',
            borderBottomColor: '#F6F6F6',
            borderColor: '#F6F6F6',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              left: 22,
              top: 0,
            }}
            placeholder="India"
            onChangeText={text => setcountry(text)}
            value={country}
          />

          <Image
            style={{height: 3.99, width: 7, left: 285, top: 5}}
            source={ImagePath.india}
          />
        </View>
      </View>

      <View></View>

      <TouchableOpacity style={{marginTop: 180, margin: 20}}>
        {/* style={{top: '38%'}} onPress={()=>navigation.navigate(submitfun)}> */}
        {/* <ImageBackground
          style={{height: 50, width: 316, borderBottomLeftRadius: 20, left: 22}}
          source={ImagePath.Button_back}
          imageStyle={{borderRadius: 8}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: 'white',
              alignSelf: 'center',
              top: 15,
            }}>
            Update
          </Text>
        </ImageBackground> */}
        <ButtonField label={'Update'} submitfun={submitfun} />
      </TouchableOpacity>
    </View>
  );
};
export default Myprofile;
