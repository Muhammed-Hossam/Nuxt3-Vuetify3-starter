import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    theme: 'colored',
    autoClose: 3000,
    position: 'top-center',
    rtl: nuxtApp.$i18n.locale.value === 'ar' ? true : false
  });

  // console.log('NuxtApp ==> ', nuxtApp);

  return {
    provide: { toast },
  };
});