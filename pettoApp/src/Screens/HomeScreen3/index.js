import React from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import ImagePath from '../../constants/ImagePath';




const smartdata=[
    {
        id: 1,
        
        Image:ImagePath.fidele,
      },
       {
         id: 2,
         
         Image: ImagePath.milk,
      },
      {
        id: 3,
        
        Image: ImagePath.milk,
      },
    
];


const reusedata=[
  {
      id: 1,
      Image:ImagePath.silky,
    },
     {
       id: 2,
       Image: ImagePath.snow,
    },
    {
      id: 3,
      Image: ImagePath.snow,
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


const HomeScreen3 = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white',width:'100%',height:'100%'}}>
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
          <View style={{ marginLeft: 10}}>
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

      data={[{name:'SHIVAJI'}]}
      renderItem={({item})=>(
        <>
       

      <View style={{left: 18, width: 300,}}>
        <Text style={{fontSize: 25, fontWeight: '700', color: '#1F272D'}}>
          Find best products for your pet
        </Text>
      </View>


      <View style={{left:18,top:18}}>
        <Text style={{fontSize:16,fontWeight:'400',color:'#888888'}}>Pet Category</Text>
      </View>

      <View style={{flexDirection:'row',left:18,top:28}}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail')}>
          <View>
            <Image style={{width: 150, height: 131}} source={ImagePath.raj} />
          </View>
          <View>
            <Text style={{fontSize:14,fontWeight:"500", color:'#1F272D',left:55}}>
            Dogs
            </Text>
          </View>
        </TouchableOpacity>
      


      
        <TouchableOpacity>
          <View>
            <Image style={{width: 150, height: 131,left:25}} source={ImagePath.sandip} />
          </View>
          <View>
            <Text style={{fontSize:14,fontWeight:"500", color:'#1F272D',left:95}}>
            Cats
            </Text>
          </View>
        </TouchableOpacity>
      </View>


<View style={{flexDirection:'row', justifyContent:'space-between',top:58}}>
     <View style={{flexDirection:'row',}}>
        <Text style={{fontSize:16,fontVariant:'500',color:'#888888',left:18}}>Popular Foods</Text>
        <Text style={{fontSize:15,fontVariant:'400',color:'#888888',left:170}}>View all</Text>
     </View>
     <View>
        <Image 
        style={{height:12,width:12,right:18,top:4}}
        source={ImagePath.right}/>
     </View>
     </View>


     <View>

<FlatList  
data={smartdata}
horizontal={true}
renderItem={({item})=>(

    <>
<TouchableOpacity >
    <View style={{marginTop:70,margin:13,left:3}}>
        <Image
        style={{height:226,width:150}}
        source={item.Image}/>
    </View>
</TouchableOpacity>
</>
)}

/>

     </View>





     <View style={{flexDirection:'row', justifyContent:'space-between',top:25}}>
     <View style={{flexDirection:'row',}}>
        <Text style={{fontSize:16,fontVariant:'500',color:'#888888',left:18}}>Popular Shampoo</Text>
        <Text style={{fontSize:15,fontVariant:'400',color:'#888888',left:145}}>View all</Text>
     </View>
     <View>
        <Image 
        style={{height:12,width:12,right:18,top:4}}
        source={ImagePath.right}/>
     </View>
     </View>


     
     <View>

<FlatList  
data={reusedata}
horizontal={true}
renderItem={({item})=>(

    <>
<TouchableOpacity>
    <View style={{marginTop:35,margin:13,left:4}}>
        <Image
        style={{height:226,width:150}}
        source={item.Image}/>
    </View>
</TouchableOpacity>
</>
)}

/>

     </View>


     
     <View style={{top:38}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#888888',
                    left:18,
                    top: -10,
                  }}>
                 Other Products
                </Text>
             
              <View style={{flexDirection: 'row', top: -5, left: 150}}>
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


              <View>

             <FlatList 
             
             data={superdata}
             horizontal={true}
             renderItem={({item})=>(

<>

<TouchableOpacity style={{marginRight:25, top:8}}>
                    <View
                      style={{
                        backgroundColor: '#F5F5F5',
                        height:83,
                        width: 182,
                        left:18,
                        borderRadius: 10,
                      }}>
                      <Image
                        style={{
                          width: 40,
                          height:29,
                          alignSelf: 'center',
                          top:34,
                          right:60,

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
                          left:30
                        }}>
                        {item.name}
                      </Text>
                      <Text style={{color: 'black', left:50,top:25,fontWeight:'700',fontSize:14}}>
                        {item.price}
                      </Text>

                      <Text style={{fontSize:10,fontWeight:'400',color:'#888888',width:100,top:-20,left:30}}>{item.sunheading}</Text>
                    </View>
                  </TouchableOpacity>
              
          


           



</>
)}
/>
</View>







             

  

        




     </>
      )}
      
      />


      
<View style={{top: -80, left: 175}}>
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

export default HomeScreen3;
