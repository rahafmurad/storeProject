import { TouchableOpacity, Text ,Image} from "react-native";
import styles from "../style/Style"

import Icon from 'react-native-vector-icons/AntDesign';
const AppButton = ({ onPress, title ,style ,titilestyle , icon ,iconstyle}) => (
    <TouchableOpacity onPress={onPress} style={style}>
       <Icon
            name={icon}
            size={10}
            color="#FFF"
            style={{left:19, marginVertical:-5}}
          />
       <Text style={[ styles.appButtonText ,titilestyle]}>{title}</Text>
    
    </TouchableOpacity>

  );

 
  export default AppButton;