import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { router } from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheckSquare,
  faXmarkSquare,
  faArrowLeft,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faXmarkSquare, faArrowLeft, faLock);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
