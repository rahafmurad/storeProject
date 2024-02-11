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
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../style/Style';
import SQLite from 'react-native-sqlite-storage';
import {useState, useEffect} from 'react';

const CartPage = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState('');
 const delevery = 18;
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
  const getData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM Invoice', [], (tx, results) => {
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
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTotal = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT SUM(Price * (Number +1)) AS Total FROM Invoice',
        [],
        (tx, results) => {
          const total = results.rows.item(0).Total;
          if(total != null){
            setTotal(total +delevery);

          }
          else{
            setTotal(0);

          }
         console.log('Total:', total );
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  const removeData = async () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Invoice',
          [],

          error => {
            console.log(error);
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getTotal();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Icon
            name="arrowleft"
            size={30}
            color="#00277F"
            style={{marginHorizontal: 15}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#00277F',
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center',
          }}>
          CHECK OUT
        </Text>
        <Icon
          name="shoppingcart"
          size={30}
          color="#00277F"
          style={{marginHorizontal: 15}}
        />
      </View>

      {/* Invoice */}
      <View
        style={{
          flex: 2,
          top: 55,
          backgroundColor: '#F4F6FF',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        {/* Icon */}
        <View
          style={{
            //position: 'absolute',
            height: 80,
            width: 80,
            backgroundColor: '#FE6457',
            borderRadius: 80 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            alignSelf: 'center',
            top: -30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <Icon name="arrowdown" size={40} color="#fff" />
        </View>
        {data.map((item, index) => (
          <View
            key={index.toString()}
            style={{
              flexDirection: 'row',

              marginVertical: 18,
            }}>
            <View style={{width: 170, marginLeft: 10}}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={[styles.text, {fontSize: 12}]}>
                {item.Title}
              </Text>
            </View>
            <View style={{width: 100}}>
              <Text style={[styles.text, {fontSize: 13}]}>
                {'X ' + (item.Number + 1)}
              </Text>
            </View>
            <View style={{width: 100}}>
              <Text style={[styles.text, {fontSize: 13}]}>
                {'$' + item.Price}
              </Text>
            </View>
          </View>
        ))}
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            width: 350,
            height: 1.5,
            backgroundColor: '#D4D9E5',
          }}
        />
          <View
        style={{
          flexDirection: 'row',       
        }}>
        <View style={{width: 70, marginLeft: 10}}>
          <Text

            style={[styles.text, {fontSize: 12}]}>
            {'DELEVERY'}
         </Text>
        </View>
        <View style={{width: 190, marginHorizontal:20}}>
          <Text style={[styles.text, {fontSize: 13}]}>{'UPSTELL '}</Text>
        </View>
        <View style={{width: 30 }}>
          <Text style={[styles.text, {fontSize: 13}]}>{'$'+ delevery}</Text>
        </View>
      </View>

      
      </View>
  

      
      {/* Footer */}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{justifyContent: 'space-around', flexDirection: 'row' }}>
          <Text style={[styles.text, {fontSize: 30, fontWeight: 'bold'}]}>
            Total:
          </Text>
          <Text
            style={[
              styles.text,
              {fontSize: 30, fontWeight: 'bold', color: '#FE6457'},
            ]}>
            ${total}
          </Text>
        </View>
        <ImageBackground
          style={{
            top: 35,
            height: 250,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('/Users/rahaf/furnitureProject/assets/background.png')}>
          <Icon name="smileo" size={60} color="#fff" />
          <Text style={{color: '#fff', fontSize: 30, marginTop: 20}}>
            THANK YOU!
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default CartPage;
