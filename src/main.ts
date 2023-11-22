import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheckSquare,
  faXmarkSquare,
  faArrowLeft,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { router } from "./routes";
library.add(faCheckSquare, faXmarkSquare, faArrowLeft, faLock);

const app = createApp(App);
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
