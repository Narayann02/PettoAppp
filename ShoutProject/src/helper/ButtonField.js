import react from 'react';
import { StyleSheet,Text,TouchableOpacity,ImageBackground} from 'react-native';
import ImagePath from '../constants/ImagePath';


const ButtonField=(props)=>
{
    return(
        <TouchableOpacity onPress={props.submitfun}>

            <ImageBackground source={ImagePath.Button_back} imageStyle={{borderRadius:10}}>
            <Text style={{...styles.buttontext,}}>{props.label}</Text>
            </ImageBackground>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    buttontext:{
        fontSize:15,
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"600",
        padding:18,
    },
})
export default ButtonField;