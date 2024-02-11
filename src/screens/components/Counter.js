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
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';

const Counter = ({route}) => {
    const [num , setNum] = useState(0);

 
    console.log(num);
    return (
            <View
                style={{
                    height: 30,
                    width: 55,
                    backgroundColor: '#7C9BC7',
                    borderRadius: 50,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    right:50
                
                }}>
               <TouchableOpacity onPress={() => setNum(num + 1)}
>    
              <Icon
                    name="left"
                    size={15}
                    color="#8EAED8"
                    style={{ marginBottom: 7, marginLeft: 5 }}

                /> 
                </TouchableOpacity> 
                <Text style={{ color: '#FFFFFF', fontSize: 18, alignSelf: 'center' }}>{num+1}</Text>

                <TouchableOpacity  onPress={() => setNum(Math.max(num - 1, 0))}>  
                <Icon
                    name="right"
                    size={15}
                    color="#8EAED8"
                    style={{ marginBottom: 7, marginRight: 5 }}
                    
               />
              </TouchableOpacity>
            </View>
  );

};
export default Counter;