import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Mustache from '@/pages/Mustache'
import Vtext from '@/pages/V-text'
import Vhtml from '@/pages/V-html'
import Vbind from '@/pages/V-bind'
import JsExpression from '@/pages/Js-expression'
import Von from '@/pages/V-on'
import VonFunction from '@/pages/V-on-function'
import VonEventModifiers from '@/pages/V-on-event-modifiers'
import VonKeyModifiers from '@/pages/V-on-key-modifiers'
import VModel from '@/pages/V-model'
import VModelModifiers from '@/pages/V-model-modifiers'
import Vif from '@/pages/V-if'
import Vshow from '@/pages/V-show'
import Vfor from '@/pages/V-for'
import VueQuickstart from '@/pages/Vue-quickstart'
import VueInstance from '@/pages/Vue-instance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/v-text',
      name: 'v-text',
      component: Vtext
    },
    {
      path: '/mustache',
      name: 'mustache',
      component: Mustache
    },
    {
      path: '/v-html',
      name: 'v-html',
      component: Vhtml
    },
    {
      path: '/v-bind',
      name: 'v-bind',
      component: Vbind
    },
    {
      path: '/js-expression',
      name: 'js-expression',
      component: JsExpression
    },
    {
      path: '/v-on',
      name: 'v-on',
      component: Von
    },
    {
      path: '/v-on-function',
      name: 'v-on-function',
      component: VonFunction
    },
    {
      path: '/v-on-event-modifiers',
      name: 'v-on-event-modifiers',
      component: VonEventModifiers
    },
    {
      path: '/v-on-key-modifiers',
      name: 'v-on-key-modifiers',
      component: VonKeyModifiers
    },
    {
      path: '/vue-quickstart',
      name: 'vue-quickstart',
      component: VueQuickstart
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: VModel
    },
    {
      path: '/v-model-modifiers',
      name: 'v-model-modifiers',
      component: VModelModifiers
    },
    {
      path: '/v-if',
      name: 'v-if',
      component: Vif
    },
    {
      path: '/v-show',
      name: 'v-show',
      component: Vshow
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: Vfor
    },
    {
      path: '/vue-instance',
      name: 'vue-instance',
      component: VueInstance
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }
  ]
})
