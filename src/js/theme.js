import { createApp } from "vue/dist/vue.esm-bundler.js";
import HelloWordPress from "./components/HelloWordPress.vue";

let app = createApp({
    name: "App"
});

app.component("hello-wordpress", HelloWordPress);
app.mount("#app");