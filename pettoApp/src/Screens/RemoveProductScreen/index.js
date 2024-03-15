import React, { useState } from "react";
import {View,Text,TouchableOpacity,Image, Modal, ImageBackground} from "react-native";
import ImagePath from "../../constants/ImagePath";


const RemoveProductScreen =()=>{


  const [showModal,setShowModal]=useState(false);
    return(
        <View style={{backgroundColor: 'white', flex: 1}}>

            <Modal 
            transparent={true}
            visible={showModal}
            >
                <View style={{width:300,height:346,backgroundColor:'white',borderRadius:15,left:30,top:200,elevation:8}}>

<TouchableOpacity style={{alignSelf:'center',top:30}}  onPress={()=>setShowModal(false)}>
    <ImageBackground style={{height:90,width:90}}  source={ImagePath.redcircle}>

        <Image  
        style={{height:45,width:45,alignSelf:'center',top:22}}
        source={ImagePath.delete}/>
    </ImageBackground>
</TouchableOpacity>


<View style={{width:200,left:60,top:45}}>
<Text style={{fontSize:16,fontWeight:'500',color:"#1F272D"}}>Are you sure you want to remove this product?</Text>
</View>

<View style={{width:255,alignSelf:'center',top:55,left:8}}>
<Text style={{fontSize:14,fontWeight:'400',color:"#9D9D9D"}}>Removing it from the cart means you'll need to add it again if you decide to make a purchase.</Text>
</View>
                </View>


            </Modal>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 22,
          }}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image style={{height: 30, width: 30}} source={ImagePath.atoz} />
              </View>
  
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#2D2E43',
                    left: 15,
                  }}>
                Cart
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
  
        

        <View style={{left:22,top:10}}>
            <TouchableOpacity>
            <Image  
            style={{height:67,width:40}}
            source={ImagePath.food_420}/>

</TouchableOpacity>

        </View>

<View style={{alignSelf:'center',top:-52,right:50}}>
<View>
    <Text style={{fontSize:16,fontWeight:'700',color:'#1F272D',right:8}}t>Snow Peas</Text>
</View>
<View style={{top:10,}}>
      <View style={{ flexDirection:'row',alignItems:'center',}}>

      <TouchableOpacity style={{right:10}}>
        <View style={{backgroundColor: '#F5F5F5', height:28, width: 28,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:2}}>-</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={{fontSize:13,fontWeight:'700',color:'#1F272D'}} >3</Text>
      </View>

      <TouchableOpacity style={{left:10}}>
      <View style={{backgroundColor: '#F5F5F5', height:28, width: 28,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:2}}>+</Text>
        </View>
      </TouchableOpacity>
      </View>
      </View> 
      </View>



      <View>

      </View>

      <View style={{alignSelf:'center',left:125,marginTop:-99}}>

<Text style={{fontSize:16,fontWeight:'700',color:"#1F272D"}}>₹2,850</Text>

<View style={{backgroundColor:'#FFF2F2',width:62,height:20,marginTop:14}}>

    <TouchableOpacity onPress={()=>setShowModal(true)}>
    <Image 
    style={{height:10,width:10,top:5,left:5}}
    source={ImagePath.remove}/>
    </TouchableOpacity>

<View style={{top:-7,left:20}}>

    <Text style={{fontSize:10,fontWeight:'400',color:'#DC4E4E'}}>Remove</Text>
    </View>

</View>

</View>



<View style={{marginTop:25}}>
<View style={{left:22,top:10}}>
            <TouchableOpacity>
            <Image  
            style={{height:67,width:40}}
            source={ImagePath.food_420}/>

</TouchableOpacity>

        </View>

<View style={{alignSelf:'center',top:-52,right:50}}>
<View>
    <Text style={{fontSize:16,fontWeight:'700',color:'#1F272D',right:8}}t>Snow Peas</Text>
</View>
<View style={{top:10,}}>
      <View style={{ flexDirection:'row',alignItems:'center',}}>

      <TouchableOpacity style={{right:10}}>
        <View style={{backgroundColor: '#F5F5F5', height:28, width: 28,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:2}}>-</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={{fontSize:13,fontWeight:'700',color:'#1F272D'}} >3</Text>
      </View>

      <TouchableOpacity style={{left:10}}>
      <View style={{backgroundColor: '#F5F5F5', height:28, width: 28,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:2}}>+</Text>
        </View>
      </TouchableOpacity>
      </View>
      </View> 
      </View>



      <View>

      </View>

      <View style={{alignSelf:'center',left:125,marginTop:-99}}>

<Text style={{fontSize:16,fontWeight:'700',color:"#1F272D"}}>₹2,850</Text>

<View style={{backgroundColor:'#FFF2F2',width:62,height:20,marginTop:14}}>

    <TouchableOpacity>
    <Image 
    style={{height:10,width:10,top:5,left:5}}
    source={ImagePath.remove}/>
    </TouchableOpacity>

<View style={{top:-7,left:20}}>

    <Text style={{fontSize:10,fontWeight:'400',color:'#DC4E4E'}}>Remove</Text>
    </View>

</View>
</View>










</View>




<View style={{marginTop:25}}>
<View style={{left:22,top:10}}>
            <TouchableOpacity>
            <Image  
            style={{height:67,width:40}}
            source={ImagePath.food_420}/>

</TouchableOpacity>

        </View>

<View style={{alignSelf:'center',top:-52,right:50}}>
<View>
    <Text style={{fontSize:16,fontWeight:'700',color:'#1F272D',right:8}}t>Snow Peas</Text>
</View>
<View style={{top:10,}}>
      <View style={{ flexDirection:'row',alignItems:'center',}}>

      <TouchableOpacity style={{right:10}}>
        <View style={{backgroundColor: '#F5F5F5', height:28, width: 28,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:2}}>-</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={{fontSize:13,fontWeight:'700',color:'#1F272D'}} >3</Text>
      </View>

      <TouchableOpacity style={{left:10}}>
      <View style={{backgroundColor: '#F5F5F5', height:28, width: 28,borderRadius:8}}>
          <Text style={{fontSize:16,fontWeight:'900',color:'#1F272D',alignSelf:'center',top:2}}>+</Text>
        </View>
      </TouchableOpacity>
      </View>
      </View> 
      </View>



      <View>

      </View>

      <View style={{alignSelf:'center',left:125,marginTop:-99}}>

<Text style={{fontSize:16,fontWeight:'700',color:"#1F272D"}}>₹2,850</Text>

<View style={{backgroundColor:'#FFF2F2',width:62,height:20,marginTop:14}}>

    <TouchableOpacity onPress={()=>setShowModal(false)}>
    <Image 
    style={{height:10,width:10,top:5,left:5}}
    source={ImagePath.remove}/>
    </TouchableOpacity>

<View style={{top:-7,left:20}}>

    <Text style={{fontSize:10,fontWeight:'400',color:'#DC4E4E'}}>Remove</Text>
    </View>

</View>
</View>
</View>



<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:240,padding:22}}>
  
    <Text  style={{fontSize:12,fontWeight:'700',color:'#1F272D'}}>Total item (3)</Text>
    <Text  style={{fontSize:14,fontWeight:'700',color:'#1F272D'}}>₹6,200</Text>
</View>





<TouchableOpacity >
<View style={{backgroundColor:'#F14647',height:50,width:316,borderRadius:10,left:22,marginTop:-5}}>

<Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',alignSelf:'center',marginTop:12}}>
Checkout</Text>


</View>
</TouchableOpacity>

        </View>
  

    )
}
export default RemoveProductScreen;