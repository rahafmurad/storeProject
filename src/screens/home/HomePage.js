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
  StyleSheet
} from 'react-native'
import React from 'react'
import Rectangular from '../components/Rectangular';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import AppButton from '../components/Button';
import styles from '../style/Style';
import IconButton from '../components/IconButton';
import ProductPage from './ProductPage';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useTranslation } from 'react-i18next';
import {useState, useEffect} from 'react';

import SQLite from 'react-native-sqlite-storage';


const HomePage = ({ navigation }) => {
 //const {t,i18n} = useTranslation();

  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
/*
const changeLanguage = newLang => {
    i18n.changeLanguage(newLang);
  };
*/
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
          'Inventory ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Price FLAT , Description TEXT , Image TEXT , Category , TEXT);',
      );
    });
  };

  const setValue = async (title, price, description, image, category) => {
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql(
          'INSERT INTO Inventory (Title, Price, Description, Image, Category) VALUES (?, ?, ?, ?, ?)',
          [title, price, description, image, category],
        );
      });
      console.log('Data inserted successfully.');
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (category) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM Inventory WHERE Category = ?',
          [category],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var data = [];
              for (let i = 0; i < len; i++) {
                var item = results.rows.item(i);
                data.push(item);
              }
              setData(data);
              console.log(data);
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    createTable();
  }, []);

 


  const fetchData = async () => {
    try {
      headersConfig = {
        "headers": {
          Accept: "*/*"
        }
      }
      const response = await axios.get(
        'https://fakestoreapi.com/products/?sort=desc',
        headersConfig,
      );
      const data = response.data;
      setData(data);
      for (const item of data) {
        await setValue(
          item.title,
          item.price,
          item.description,
          item.image,
          item.category,
        );
      }
      console.log('Data fetched and inserted successfully.');
    } catch (error) {
      console.log(error);
    }
  };

  const [isSelected, setIsSelected] = useState(false);

  return (

    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'trasparent' }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          
        <Icon
          name="arrowleft"
          size={30}
          color="#00277F"
          style={{ marginHorizontal: 15 }}
        />

        <Text
          style={{
            color: '#00277F',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
          }}>
          STORE
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("CartPage")}>
          <Icon
            name="shoppingcart"
            size={30}
            color="#00277F"
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      </View>
      {/* SORT */}
      <View
        style={{
          flexDirection: 'row',
         width: '80%',
          justifyContent: 'space-between',
          height: '9%',
        }}>

        <AppButton style={[styles.circlarButton]} icon={'down'} title = {'table'} titilestyle={{ fontSize: 10, marginVertical: -7, marginRight: 7 }}
 />


        <AppButton style={[styles.circlarButton]} icon={'down'} title={'0-100$'} titilestyle={{ fontSize: 10, marginVertical: -7, marginRight: 7 }} />

        <AppButton style={[styles.circlarButtonB]} icon={'down'} title={'sort'} titilestyle={{ fontSize: 9, marginVertical: -7, marginRight: 7 }} />

        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
          <Icon1
            name="menu"
            size={25}
            color={isSelected ? "#002981" : "#C1C8D9"}
            style={{ marginVertical: 22, marginHorizontal: -3 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          const isOdd = index % 2 !== 0;

            return (
              <Rectangular  itemData={item} isSquare={isOdd ? (index === 1 ?true : false) : (index === 0 ? false: true)
              } onPress={() => navigation.navigate('ProductPage' , {
                title: item.title,
                price:item.price,
                description:item.description,
                image:item.image,

              })} />
            );
         
        }}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  )
}

export default HomePage;