import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Index from '@/pages/Index';
import Mustache from '@/pages/Mustache';
import Vtext from '@/pages/V-text';
import Vhtml from '@/pages/V-html';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/v-text',
      name: 'V-text',
      component: Vtext
    },
    {
      path: '/mustache',
      name: 'Mustache',
      component: Mustache
    },
    {
      path: '/v-html',
      name: 'V-html',
      component: Vhtml
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
