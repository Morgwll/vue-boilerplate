import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '/about', component: About }
]