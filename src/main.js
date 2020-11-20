import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "element-plus";

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .mount("#app");
