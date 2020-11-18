import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ScrollPanel from 'primevue/scrollpanel';

Vue.component("Button", Button);
Vue.component("InputText", InputText);
Vue.component("Password", Password);
Vue.component("TabView", TabView);
Vue.component("TabPanel", TabPanel);
Vue.component("ScrollPanel", ScrollPanel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
