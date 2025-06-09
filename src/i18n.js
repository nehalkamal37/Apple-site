// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',                // valor inicial
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: require('../public/locales/en/translation.json') },
      es: { translation: require('../public/locales/es/translation.json') },
    }
  });

export default i18n;
