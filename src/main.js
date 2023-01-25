import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

import '@vueform/multiselect/themes/default.css'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
app.component('Datepicker', Datepicker);

// make config and data sources
// available globally
import { api } from "@/api.config.js";
Window.CC = {
  api: api,
};

app.mount("#app");
