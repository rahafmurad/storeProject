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
  StyleSheet,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Counter from '../components/Counter';
import AppButton from '../components/Button';
import styles from '../style/Style';
import Circle from '../components/Circle';
import {useState, useEffect} from 'react';
import Tape from '../components/Tape';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';

const ProductPage = ({navigation, route}) => {
  const title = route.params.title;
  const price = route.params.price;
 const description = route.params.description;
  const image = route.params.image;
  const [num , setNum] = useState(0);
  console.log(num);
  const db = SQLite.openDatabase(
    {
      name: 'Store',
      location: 'default',
    },
    () => {},
    error => {
      console.log(error);
    },
  );

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Invoice ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Price FLAT , Description TEXT , Number INTEGER);',
      );
    });
  };

  const setValue = async (num) => {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'INSERT INTO Invoice (Title, Price, Description, Number) VALUES (?, ?, ?, ?)',
          [title, price, description, num],
        );
      });
      console.log(title, price,num);
    } catch (error) {
      console.log(error);
    }
  };



  const {t, i18n} = useTranslation();
  const changeLanguage = () => {
    try {
      const newLanguage = i18n.language === 'ar' ? 'en' : 'ar';
      i18n.changeLanguage(newLanguage);
      console.log(newLanguage);
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handlePress = circleIndex => {
    setSelectedCircle(circleIndex);
  };

  useEffect(() => {

    createTable();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <ImageBackground
        style={{
          flex: 1,
          height: 450,
          width: '100%',
        }}
        source={{uri: image}}>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            top: 70,
          }}>
          <Icon
            name="closecircle"
            size={25}
            color="#6F8CB4"
            style={{marginHorizontal: 20}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <Icon
              name="arrowleft"
              size={30}
              color="#00277F"
              style={{marginHorizontal: 20}}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          height: '25%',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          flex: 1,
        }}>
        <Text
          ellipsizeMode="middle"
          numberOfLines={1}
          style={[
            styles.text,
            {
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 15,
              marginBottom: 40,
              width: '70%',
              alignSelf: 'center',
            },
          ]}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Tape
            style={{height: 90, width: 170}}
            textStyle={{
              color: '#FFFFFF',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              right: 5,
            }}
            text={'$' + price}
          />
          
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
        </View>
        <View
          style={[
            styles.rowContainer,
            {marginVertical: 40, marginHorizontal: 20},
          ]}>
          <Circle
            style={{backgroundColor: '#FF6359'}}
            isSelected={selectedCircle === 0}
            onPress={() => handlePress(0)}
          />
          <Circle
            style={{backgroundColor: '#F1F1F1'}}
            isSelected={selectedCircle === 1}
            onPress={() => handlePress(1)}
          />
          <Circle
            style={{backgroundColor: 'black'}}
            isSelected={selectedCircle === 2}
            onPress={() => handlePress(2)}
          />

          <Text style={[styles.text, {color: '#99A7BF', marginHorizontal: 15}]}>
            {' '}
            color
          </Text>
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={[styles.text, {marginHorizontal: 17, marginVertical: -20}]}>
          {description}
        </Text>
        <AppButton
          style={styles.OrangeButton}
          title="add to cart"
          onPress={() => setValue(num)}
        />
      </View>
    </View>
  );
};
export default ProductPage;
