import en from './locales/en.json';
import ar from './locales/ar.json';
import { en as $vuetifyEn } from 'vuetify/locale';
import { ar as $vuetifyAr } from 'vuetify/locale';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ar',
  messages: {
    en: {
      ...en,
      $vuetify: $vuetifyEn
    },
    ar: {
      ...ar,
      $vuetify: $vuetifyAr
    }
  }
}))