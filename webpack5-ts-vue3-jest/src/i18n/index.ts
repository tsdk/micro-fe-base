import { createI18n } from "vue-i18n";
import zhLang from "./zh";
import enLang from "./en";

const messages = {
  en: {
    hello: 'hello world',
    ...enLang
  },
  zh: {
    hello: '你好，世界',
    ...zhLang
  }
}

const i18n = createI18n({
  locale: 'zh', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n;
