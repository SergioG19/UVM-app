import Home from './views/Home.vue';
import About from './views/About.vue';
import Tutorials from './views/Tutorials.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tutorials', component: Tutorials },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

export default routes;
