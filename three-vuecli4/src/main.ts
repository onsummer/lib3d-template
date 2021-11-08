import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";

import './main.less'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount("#app")
