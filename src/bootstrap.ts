import axios from 'axios';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import FetchBackend from 'i18next-fetch-backend';
import { initReactI18next } from 'react-i18next';
import locales from './locales.json';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true; // CORS

i18next
  .use(FetchBackend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: locales.map((item) => item.code),
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    detection: {
      // order and from where user language should be detected
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],

      // keys or params to lookup language from
      lookupQuerystring: 'locale',
      lookupCookie: 'locale',
      lookupLocalStorage: 'locale',
      lookupSessionStorage: 'locale',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      caches: ['localStorage', 'cookie'],
    },
  });