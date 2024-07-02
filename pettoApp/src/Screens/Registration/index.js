import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';
import ApiDataService from '../../services/ApiDataService';
import ButtonField from '../../helper/ButtonField';

let genderdata = [
  {name: 'Male', value: 'Male', id: 1},
  {name: 'Female', value: 'Female', id: 2},
];

const Registration = ({navigation, route}) => {
  const phonenumber = route?.params?.phonenumber;

  const [inputname, setinputname] = useState({
    name: null,
    message: '',
    isvalid: false,
  });
  const [inputemail, setinputemail] = useState({
    name: null,
    message: '',
    isvalid: false,
  });

  const [gendertype, setgendertype] = useState('');
  const [genderid, setgenderid] = useState('');
  const [loading, setloading] = useState(false);
  const [btndisable, setbtndisable] = useState(false);

  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validatename = _in => {
    try {
      setinputname(prev => ({...prev, value: _in}));
      if (!_in) {
        setinputname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter your name',
        }));
        setbtndisable(false);
      } else if (_in.length === 0) {
        setinputname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter your name',
        }));
        setbtndisable(false);
      } else {
        setinputname(prev => ({...prev, isValid: false, message: ''}));
        setbtndisable(true);
      }
    } catch (error) {}
  };
  const validateemail = _in => {
    try {
      setinputemail(prev => ({...prev, value: _in}));
      if (!_in) {
        setinputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else if (_in.length === 0) {
        setinputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
      } else if (!emailReg.test(_in.toLocaleLowerCase())) {
        setinputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter valid email',
        }));
      } else {
        setinputemail(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
  };
  const signupsubmit = () => {
    let body = {
      name: inputname.value,
      email: inputemail.value,
      gender: gendertype,
      // status: true
    };
    console.log(body);
    setloading(true);
    ApiDataService.putapi('user/', body)
      .then(response => {
        setloading(false);
        console.log('response----------->', response.data);
        navigation.navigate('ProfileImage');
      })
      .catch(e => {
        setloading(false);
        console.log('e------>', e);
      });
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View>
        <Image
          style={{height: 70.39, width: 80, left: 145, top: 40}}
          source={ImagePath.pettoG}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: '#1F272D',
            top: 60,
            left: 22,
          }}>
          Your phone number is not registered
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#888888',
            left: 23,
            top: 65,
            marginRight: 60,
          }}>
          Kindly input the required details to complete the registration
          process.
        </Text>
      </View>

      <View style={{top: -120}}>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 48,
            width: 316,
            left: 22,
            borderRadius: 10,
            top: 210,
            backgroundColor: '#EEEEEE',
            borderColor: '#F5F5F5',
          }}>
          <Image
            style={{height: 28, width: 28, left: 16, top: 9}}
            source={ImagePath.bharat}
          />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#1F272D',
              top: -15,
              left: 50,
            }}>
            +91
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#1F272D',
              top: 0,
              left: 0,
            }}>
            {phonenumber}
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#1F272D',
                left: 255,
                top: -55,
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#1F272D',
            left: 22,
            top: 105,
          }}>
          Enter your name{' '}
        </Text>
        <Text style={{color: '#F4533A', left: 110, top: 85}}>*</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 48,
            width: 316,
            left: 22,
            borderRadius: 10,
            top: 90,
            backgroundColor: '#EEEEEE',
            borderColor: '#F5F5F5',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#A9A9AA',
              left: 13,
            }}
            placeholder="Esther Howard"
            placeholderTextColor={'#A9A9AA'}
            onChangeText={text => {
              validatename(text);
            }}
            value={inputname.value}
            type={'text'}
          />
        </View>
      </View>

      <View style={{top: 0}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#1F272D',
            left: 22,
            top: 105,
          }}>
          Enter your email
        </Text>

        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 48,
            width: 316,
            left: 22,
            borderRadius: 10,
            top: 110,
            backgroundColor: '#EEEEEE',
            borderColor: '#F5F5F5',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#A9A9AA',
              left: 13,
            }}
            placeholder="example@example.com"
            placeholderTextColor={'#A9A9AA'}
            value={inputemail.value}
            onChangeText={text => {
              validateemail(text);
            }}
            type={'text'}
            sectext='false'
            errorText={inputemail.message}
          />
        </View>
      </View>

      <View style={{top: 18}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#1F272D',
            left: 22,
            top: 105,
          }}>
          Select your gender
        </Text>
        <Image source={ImagePath} />
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 48,
            width: 316,
            left: 22,
            borderRadius: 10,
            top: 110,
            backgroundColor: '#EEEEEE',
            borderColor: '#F5F5F5',
          }}>
          <TextInput
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#A9A9AA',
              left: 13,
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
          <Image
            style={{height: 8, width: 13, left: 280, top: -26}}
            source={ImagePath.air}
          />
        </View>
      </View>

      {/* <TouchableOpacity onPress={() => signupsubmit()}>
        <View
          style={{
            borderBottomWidth: 1,
            borderWidth: 1,
            height: 48,
            width: 316,
            left: 22,
            borderRadius: 10,
            top: 170,
            backgroundColor: '#F14647',
            borderColor: '#F14647',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '500',
              color: '#FFFFFF',
              top: 12,
            }}>
            Next
          </Text>
        </View>
      </TouchableOpacity>  */}
      <View style={{marginTop: 165}}>
        <ButtonField label={'Next'} onPress={() => signupsubmit()} />
      </View>

      <View style={{top: -180}}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#A9A9AA',
            top: 215,
            marginRight: 150,
            left: 80,
          }}>
          By clicking on “Next” you are agreeing to our{' '}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              color: '#F4533A',
              left: 167,
              top: 196,
            }}>
            {' '}
            Terms of use
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              width: 76,
              left: 172,
              top: 194,
              borderColor: '#F4533A',
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Registration;
