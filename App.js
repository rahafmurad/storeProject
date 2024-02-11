import { View, Text , I18nManager  } from 'react-native'
import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import CartPage from './src/screens/home/CartPage';
import ProductPage from './src/screens/home/ProductPage';
import HomePage from './src/screens/home/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (


    <NavigationContainer>  

<Stack.Navigator
>
       
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}
/>
       <Stack.Screen name="ProductPage" component={ProductPage} options={{ headerShown: false }}
/>
<Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }}
/>
      </Stack.Navigator>
 </NavigationContainer>
  )
}