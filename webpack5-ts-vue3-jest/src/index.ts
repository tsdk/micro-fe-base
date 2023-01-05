import { createApp } from "vue";
import i18n from "./i18n";
import App from "./App.vue";

import "./assets/fonts/iconfont.css";

const app = createApp(App);
app.use(i18n);
app.mount('#app');
