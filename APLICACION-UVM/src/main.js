import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import './style.css'
import App from './App.vue'

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);

app.mount('#app');
