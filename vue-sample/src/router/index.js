import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Mustache from '@/pages/directive/Mustache'
import Vtext from '@/pages/directive/V-text'
import Vhtml from '@/pages/directive/V-html'
import Vbind from '@/pages/directive/V-bind'
import JsExpression from '@/pages/directive/Js-expression'
import Von from '@/pages/directive/V-on'
import VonFunction from '@/pages/directive/V-on-function'
import VonEventModifiers from '@/pages/directive/V-on-event-modifiers'
import VonKeyModifiers from '@/pages/directive/V-on-key-modifiers'
import VModel from '@/pages/directive/V-model'
import VModelModifiers from '@/pages/directive/V-model-modifiers'
import Vif from '@/pages/directive/V-if'
import Vshow from '@/pages/directive/V-show'
import Vfor from '@/pages/directive/V-for'
import VforFilter from '@/pages/directive/V-for-filter'
import VueQuickstart from '@/pages/Vue-quickstart'
import VueInstance from '@/pages/Vue-instance'
import VueBasicCommand from '@/pages/sample/vue-basic-command'
import VueFilters from '@/pages/filters/Vue-filters'
import VueGlobalFilters from '@/pages/filters/Vue-global-filters'
import VueChainedFilters from '@/pages/filters/Vue-chained-filters'
import VueArgumentsFilters from '@/pages/filters/Vue-arguments-filters'
import VueWatch from '@/pages/Vue-watch'
import VueWatchOption from '@/pages/Vue-watch-option'

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
      path: '/v-for-filter',
      name: 'v-for-filter',
      component: VforFilter
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
    },
    {
      path: '/vue-basic-command',
      name: 'vue-basic-command',
      component: VueBasicCommand
    },
    {
      path: '/vue-filters',
      name: 'vue-filters',
      component: VueFilters
    },
    {
      path: '/vue-global-filters',
      name: 'vue-global-filters',
      component: VueGlobalFilters
    },
    {
      path: '/vue-chained-filters',
      name: 'vue-chained-filters',
      component: VueChainedFilters
    },
    {
      path: '/vue-arguments-filters',
      name: 'vue-arguments-filters',
      component: VueArgumentsFilters
    },
    {
      path: '/vue-watch',
      name: 'vue-watch',
      component: VueWatch
    },
    {
      path: '/vue-watch-option',
      name: 'vue-watch-option',
      component: VueWatchOption
    }
  ]
})
