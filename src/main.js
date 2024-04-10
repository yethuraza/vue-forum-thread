import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const app = createApp(App);
app.component("Button", Button);
app.component("InputText", InputText);

app.use(PrimeVue, { ripple: true }).use(router).mount("#app");
