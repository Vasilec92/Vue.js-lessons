import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import contextMenu from "./plugins/ContextMenu";

// импортируем экземпляр роутера из листинга выше
import router from "./router";

import vuetify from './plugins/vuetify'
Vue.config.productionTip = false;
Vue.use(contextMenu);
new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
