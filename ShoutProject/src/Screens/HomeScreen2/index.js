import React from "react";
import{View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,FlatList,Image} from 'react-native';
import ImagePath from "../../constants/ImagePath";



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

const HomeScreen2 =({navigation})=>{

    return(
        <View>
         
      <View style={{marginLeft:22, marginTop: 15}}>
        <Text style={{fontSize:22,fontWeight:'600',color:'#1D2226'}}> 
          Chat
        </Text>
      </View>

     
      <View>
        <TouchableOpacity>
        <ImageBackground
          style={{width: 20, height: 20, marginLeft: 316, marginTop: -25}}
          source={ImagePath.settingbar}></ImageBackground>
          </TouchableOpacity>
      </View>

      <View>
     
     
        {/* <View style={{marginTop: 5}} /> */}
         
       
      
        <View>
           
        
          
          <FlatList
            data={user}
            style={{marginBottom:'24%',paddingBottom:50}}
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
          <View>
          <TouchableOpacity onPress={()=>navigation.navigate('RandomChat')}>
           <View style={{marginTop:-192,}}>
          <ImageBackground
            style={{height: 80, width: 80, alignSelf: 'center',}}
            source={ImagePath.scrollbtn}></ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
          
            
          </View>
          </View>
          

        </View>
       

      
    
  
     
        
     
      
    
    

    )
}
export default HomeScreen2;