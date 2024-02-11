import React from 'react'
import { TouchableOpacity, Text ,Image} from "react-native";
import styles from "../style/Style"
import Icon from 'react-native-vector-icons/AntDesign';
const IconButton=(onPress, title ,style ,titilestyle) =>{
  return (
      
        <TouchableOpacity onPress={onPress} style={style}>
          <Text style={[styles.appButtonText ,titilestyle]}>{title}</Text>
          <Icon name= 'down' size={27} color="#FFD0C6" />    
        </TouchableOpacity>
    
      );
    
     
 
}

export default IconButton;