/**
 * @format
 */

import {AppRegistry,I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import i18next from 'i18next';

//I18nManager.forceRTL(false)
AppRegistry.registerComponent(appName, () => App);
