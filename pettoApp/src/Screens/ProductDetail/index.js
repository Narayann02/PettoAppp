import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const ProductDetail = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 22,
        }}>
        <TouchableOpacity>
          <View>
            <Image style={{height: 30, width: 30}} source={ImagePath.atoz} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Image style={{height: 25, width: 28}} source={ImagePath.heart} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <View style={{top: 55}}>
          <TouchableOpacity>
            <ImageBackground
              style={{height: 280, width: 280, alignSelf: 'center'}}
              source={ImagePath.BGcircle}>
              <Image
                style={{height: 288, width: 170, alignSelf: 'center', top: -35}}
                source={ImagePath.food_21}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>




      </View>
<View style={{alignSelf:'center',top:75,}}>
      <View style={{ flexDirection:'row',alignItems:'center',}}>

      <TouchableOpacity style={{right:10}}>
        <View style={{backgroundColor: '#F5F5F5', height: 38, width: 38,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:8}}>-</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={{fontSize:18,fontWeight:'700',color:'#1F272D'}} >3</Text>
      </View>

      <TouchableOpacity style={{left:10}}>
      <View style={{backgroundColor: '#F5F5F5', height: 38, width: 38,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:8}}>+</Text>
        </View>
      </TouchableOpacity>
      </View>
      </View> 




      
<View  style={{top:65}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:22,}}>
        <Text style={{fontSize:16,fontWeight:'700',color:'#1F272D'}}>Snow Peas</Text>
        <Text style={{fontSize:16,fontWeight:'700',color:'#1F272D'}}>₹2,850</Text>

    </View>
</View>


<View style={{flexDirection:'row',left:22,top:50}}>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:13,fontWeight:'700',color:'#1F272D'}}>₹950</Text>
        <Text style={{fontSize:10,fontWeight:'500',color:'#888888',top:2,left:3}}>x 3</Text>
    </View>

    <View style={{flexDirection:'row',top:2}}>
        <Text style={{color:'#DADADA',top:-4,left:6}}>|</Text>
        <Text style={{fontSize:10,fontWeight:'700',color:'#1F272D',left:9}}>350gm</Text>
        

    </View>
</View>

<View style={{left:22,top:60,width:300}}>
    <Text style={{fontSize:15,fontWeight:'400',color:'#888888'}}>Kit Cat Snow Peas is a 100% eco-friendly cat litter that is a healthier for both cats and 
owners.</Text>
</View>


<TouchableOpacity onPress={()=>navigation.navigate('SearchScreen')}>
<View style={{ left:22,top:120}} >
   
    <View style={{backgroundColor:'#F14647',height:50,width:316,borderRadius:10,}}>
      <View style={{alignItems:'center',top:12}}>
<Image 
style={{height:20,width:17,right:35}}
source={ImagePath.vvv}/> 
        <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',left:20,top:-18}}>
Add to cart</Text>
</View>  

    </View>
    
</View>
</TouchableOpacity>

     
    </View>
  );
};

export default ProductDetail;
