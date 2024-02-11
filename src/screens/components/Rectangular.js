import {   View,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    SafeAreaView,
    Button,
    StyleSheet } from 'react-native'
    import React from 'react'
    import Icon from 'react-native-vector-icons/AntDesign';
import Tape from './Tape';
 const Rectangular=({isSquare ,itemData , onPress})=> {
  const maxWords = 3; 
 const text =itemData.title;
  const words = text.split(' ');
  const truncatedText = words.slice(0, 3).join(' ');
  return (
    <TouchableOpacity onPress={onPress}> 
    <View> 
    <View
    style={{
      width: 165, 
      height:isSquare ? 170 :  280,
     borderRadius: 40,
      overflow: 'hidden',
    }}
  >
<ImageBackground
  style={{ width: 165,  height:isSquare ? 170 :  280, }}
      source={{ uri: itemData.image }}
>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: 20,
      marginLeft: 23,
    }}
  >
    <View
      style={{
        height: 35,
        width: 35,
        backgroundColor: '#FE6457',
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      }}
    >
      <Icon name="shoppingcart" size={17} color="#FFD0C6" />
    </View>

    <Icon name="hearto" size={14} color="#000" style={{marginRight:20 , marginTop:10}}/>
  </View>

  <View style={{marginVertical: isSquare ? 62 :172 }}>
    <Tape style={{  height: 40,
          width: 90,}}   text={truncatedText}
          textStyle={{ color: '#FFFFFF', fontSize: 10,  textAlign:'center' ,marginRight: 15}}/>
  </View>
</ImageBackground>


  </View>
  <View style={{width:150 , height:70 , justifyContent:'center' ,  marginHorizontal:15}}> 
  <Text style={{color:'#FE6457', fontSize:15}}>{'$'+itemData.price}</Text>
  <Text   ellipsizeMode="tail"
          numberOfLines={2} style={{color:'#002880', fontSize:12}}>{itemData.description}</Text>
 </View>
  </View>
  </TouchableOpacity>
  )
}
export default Rectangular;
