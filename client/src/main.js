import Vue from "vue";
import axios from "axios";
import VeeValidate from "vee-validate";
import VueLazyload from "vue-lazyload";
import VueProgressBar from "vue-progressbar";
import Toasted from "vue-toasted";
import { abilitiesPlugin } from "@casl/vue";
import Auth from "@/common/auth";
import Loading from "@/components/Loading";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./registerServiceWorker";
import "./assets/scss/app.scss";
import ability from "./ability";

Vue.use(abilitiesPlugin, ability);
Vue.use(VeeValidate);
Vue.use(Loading);
Vue.use(VueProgressBar, {
  color: "#38c172",
  failedColor: "red",
  thickness: "4px"
});
Vue.use(Toasted, {
  position: "bottom-center",
  duration: 5000,
  fitToScreen: true,
  className: "p-4",
  fullWidth: true
});
Vue.use(VueLazyload, {
  // set observer to true
  observer: true,

  // optional
  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1
  }
});

Vue.component("Admin", () => import(`@/layout/Admin.vue`));
Vue.component("Default", () => import(`@/layout/Default.vue`));

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false;

const superadmin = new Vue({
  router,
  store,
  ability,
  render: h => h(App)
});

axios.interceptors.request.use(
  config => {
    superadmin.$Progress.start(); // for every request start the progress
    const Config = config;
    if (Auth.check()) {
      Config.headers.common["Authorization"] = Auth.getBearerToken();
    }
    Config.headers.common["Accept"] = "application/json";

    return Config;
  },
  error =>
    // Do something with request error
    Promise.reject(error)
);
axios.interceptors.response.use(
  response => {
    superadmin.$Progress.finish(); // for every request stop the progress
    return response;
  },
  error => {
    superadmin.$Progress.fail();
    //  @TODO refresh token and retry request again
    if (error.response.status === 401) {
      // if the error is 401 and hasent already been retried
      return Auth.logout();
    }
    if (error.response.status === 403) {
      superadmin.$toasted.error(error.response.data.message);
      superadmin.$router.push("/access-denied");
    }
    // Do something with response error
    return Promise.reject(error); // it blocks rendering so be carefull
  }
);
superadmin.$mount("#app");
