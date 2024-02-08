import { createRouter, createWebHashHistory } from "vue-router";

import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Enter from './views/Enter.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: Events, path: '/Events' },
    { component: Enter, path: '/' },
    { component: Home, path: '/:param' }

  ],



})
