import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './locales/en.json';
import ka from './locales/ka.json';

// Detect user’s device language
const fallbackLanguage = 'en';

i18next.use(initReactI18next).init({
  //   compatibilityJSON: 'v3', /// Ensures compatibility with older versions of React Native
  lng: 'en',
  fallbackLng: fallbackLanguage,
  resources: {
    en: {translation: en},
    ka: {translation: ka},
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18next;
