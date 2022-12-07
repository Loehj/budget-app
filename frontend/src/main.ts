import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";

import { useErrorStore } from "@/stores/errors";
import "@/styles/index.scss";
import { ElLoading } from "element-plus";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElLoading);

useErrorStore().register(app);

app.mount("#app");
