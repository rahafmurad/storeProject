// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

import en from './src/screens/translation/en/en.json'; // English translations
import ar from './src/screens/translation/ar/ar.json'; // Arabic translations

const lang = () =>{
const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

            return deviceLanguage.slice(0, 2)
}

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    lng: lang(), // Default language (device language)
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18next;
