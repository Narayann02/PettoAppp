import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ApiDataService from '../../services/ApiDataService';
import {setProfileData} from '../../redux/index';
import {useSelector, useDispatch} from 'react-redux';

const MyProfile = ({navigation}) => {
  let genderdata = [
    {name: 'Male', value: 'Male', id: 1},
    {name: 'Female', value: 'Female', id: 2},
  ];

  const dispatch = useDispatch();
  const Profilestate = useSelector(state => state.ProfileReducer.data);
  console.log('Profilestate------------', Profilestate);

  const [inputname, setInputname] = useState({
    value: Profilestate?.name,
    message: '',
    isValid: false,
  });

  const [inputemail, setInputemail] = useState({
    value: Profilestate?.email,
    message: '',
    isValid: false,
  });
  const [gendertype, setgendertype] = useState('');
  const [genderid, setgenderid] = useState('');
  const [loading, setloading] = useState(false);

  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validatename = _in => {
    try {
      setInputname(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter your name',
        }));
      } else if (_in.length === 0) {
        setInputname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter your name',
        }));
      } else {
        setInputname(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
  };
  const validateemail = _in => {
    try {
      setInputemail(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else if (_in.length === 0) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else if (!emailReg.test(_in.toLocaleLowerCase())) {
        setInputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter valid email',
        }));
      } else {
        setInputemail(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
  };

  const uploaddata = () => {
    let body = {
      name: inputname.value,
      email: inputemail.value,
      gender: gendertype,
    };
    setloading(false);
    ApiDataService.putapi('user/', body)
      .then(response => {
        console.log('response--------------->', response.data);
        setloading(false);
        dispatch(setProfileData());
        navigation.navigate('SettingScreen');
      })
      .catch(e => {
        console.log('errr--------->', e);
      });
  };
  useEffect(() => {
    dispatch(setProfileData());
  }, []);
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
              Carts
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{alignSelf: 'center', top: 6}}>
        <Image
          style={{height: 140, width: 140}}
          source={ImagePath.AnanyaSinghania}
        />
      </TouchableOpacity>

      <View style={{marginTop: 40}}>
        <View style={{flexDirection: 'row', left: 22, top: -4}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
            Name{' '}
          </Text>
          <Text style={{color: '#EF1818'}}>*</Text>
        </View>

        <View
          style={{
            height: 48,
            width: 316,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
              left: 15,
            }}
            placeholder="Ananya Singhania"
            value={inputname.value}
            name={'name'}
            type={'email'}
            label="First Name"
            sectext="false"
            errorText={inputname.message}
            onChangeText={text => {
              validatename(text);
            }}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <View style={{left: 22, top: -6}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
            Email{' '}
          </Text>
        </View>

        <View
          style={{
            height: 48,
            width: 316,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
              left: 15,
            }}
            placeholder="ananyasingha@gmail.com"
            value={inputemail.value}
            name={'Email'}
            label="First Name"
            Placeholder="Enter your email"
            type="email"
            sectext="false"
            errorText={inputemail.message}
            onChangeText={text => {
              validateemail(text);
            }}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <View style={{left: 22, top: -6}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#1F272D'}}>
            Gender{' '}
          </Text>
        </View>

        <View
          style={{
            height: 48,
            width: 316,
            backgroundColor: '#F5F5F5',
            borderRadius: 8,
            left: 22,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#000000',
              left: 15,
            }}
            data={genderdata}
            maxHeight={300}
            labelField="name"
            valueField="name"
            placeholder="Select"
            placeholderTextColor="#A9A9AA"
            value={gendertype}
            onChange={item => {
              setgendertype(item.name);
              setgenderid(item.id);
            }}
          />

          <TouchableOpacity style={{top: -26, left: 285}}>
            <Image style={{height: 10, width: 12}} source={ImagePath.air} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => uploaddata()}>
          <View
            style={{
              backgroundColor: '#F14647',
              height: 50,
              width: 316,
              borderRadius: 10,
              left: 22,
              top: 42,
            }}>
            <View style={{alignItems: 'center', top: 13}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF'}}>
                Update
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MyProfile;
