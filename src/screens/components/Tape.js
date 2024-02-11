 
 import {
    View,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    SafeAreaView,
    Button,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Tape = ({style , textStyle , text}) => {
    return (
      <View
        style=  {[style,
          {backgroundColor: '#002880',
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          justifyContent:'center'}]}
      >
        <Text style={[textStyle , {  textTransform: "uppercase"}]}>{text}</Text>
      </View>
    );
  };
    export default Tape;