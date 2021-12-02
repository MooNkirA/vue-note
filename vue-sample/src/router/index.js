/* 当前项目的路由模块 */
// 1. 如果使用模块化机制编程，导入Vue和VueRouter，用于调用 Vue.use(VueRouter)
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
import VueFilters from '@/pages/filters/Vue-filters'
import VueGlobalFilters from '@/pages/filters/Vue-global-filters'
import VueChainedFilters from '@/pages/filters/Vue-chained-filters'
import VueArgumentsFilters from '@/pages/filters/Vue-arguments-filters'
import VueWatch from '@/pages/watchers/Vue-watch'
import VueWatchOption from '@/pages/watchers/Vue-watch-option'
import VueComputed from '@/pages/computedProperties/Vue-computed'
import ComponentsBasic from '@/pages/componentsSample/Components-basic'
import ComponentsGlobal from '@/pages/componentsSample/Components-global'
import ComponentsPropsCheck from '@/pages/componentsSample/Components-props-check'
import ComponentsPropsPassing from '@/pages/componentsSample/Components-props-passing'
import ComponentsLifecycle from '@/pages/componentsSample/Components-lifecycle'
import ParentPassChild from '@/pages/componentsSample/Parent-pass-child'
import ChildPassParent from '@/pages/componentsSample/Child-pass-parent'
import ComponentPassComponent from '@/pages/componentsSample/Component-pass-component'
import RefDom from '@/pages/refsAttribute/Ref-dom'
import RefComponent from '@/pages/refsAttribute/Ref-component'
import VueNextTick from '@/pages/lifecycleMethod/Vue-nexttick'
import DynamicComponents from '@/pages/componentsSample/Dynamic-components'
import DynamicComponentsKeepAlive from '@/pages/componentsSample/Dynamic-components-keep-alive'
import SlotBasic from '@/pages/slot/Slot-basic'
import NamedSlot from '@/pages/slot/Named-slot'
import ScopedSlot from '@/pages/slot/Scoped-slot'
import DynamicSlotNames from '@/pages/slot/Dynamic-slot-names'
import CustomDirectivesBasic from '@/pages/customDirectives/custom-directives-basic'
import CustomDirectivesFunctionShorthand from '@/pages/customDirectives/custom-directives-function-shorthand'
import CustomDirectivesGlobal from '@/pages/customDirectives/custom-directives-global'

/* 示例项目 */
import VueBasicCommand from '@/sample/vue-basic-command'
import CartApp from '@/sample/vue-components-sample-cart/CartApp'

// 2. 调用 Vue.use() 函数，将 VueRouter 安装成 Vue 的插件
Vue.use(Router)

/* 
  3. 创建路由的实例对象，在构造函数中传入 `routes` 配置或者其他配置参数。
  并通过 export default 对外共享此路由实例对象。在main.js文件引入，挂载到vue根实例中。
*/
export default new Router({
  /* 
    routes 选项数组，主要用于配置 “url（hash 地址）” 与 “组件” 的映射关系
    routes 接受类型：Array<RouteConfig>
    RouteConfig 的类型定义：
      interface RouteConfig = {
        path: string, // 路由url
        component?: Component, // 组件实例
        name?: string, // 命名路由
        components?: { [name: string]: Component }, // 命名视图组件
        redirect?: string | Location | Function,
        props?: boolean | Object | Function,
        alias?: string | Array<string>,
        children?: Array<RouteConfig>, // 嵌套路由
        beforeEnter?: (to: Route, from: Route, next: Function) => void,
        meta?: any,

        // 2.6.0+
        caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
        pathToRegexpOptions?: Object // 编译正则的选项
      }
  */
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/v-text',
      name: 'v-text',
      component: Vtext,
    },
    {
      path: '/mustache',
      name: 'mustache',
      component: Mustache,
    },
    {
      path: '/v-html',
      name: 'v-html',
      component: Vhtml,
    },
    {
      path: '/v-bind',
      name: 'v-bind',
      component: Vbind,
    },
    {
      path: '/js-expression',
      name: 'js-expression',
      component: JsExpression,
    },
    {
      path: '/v-on',
      name: 'v-on',
      component: Von,
    },
    {
      path: '/v-on-function',
      name: 'v-on-function',
      component: VonFunction,
    },
    {
      path: '/v-on-event-modifiers',
      name: 'v-on-event-modifiers',
      component: VonEventModifiers,
    },
    {
      path: '/v-on-key-modifiers',
      name: 'v-on-key-modifiers',
      component: VonKeyModifiers,
    },
    {
      path: '/vue-quickstart',
      name: 'vue-quickstart',
      component: VueQuickstart,
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: VModel,
    },
    {
      path: '/v-model-modifiers',
      name: 'v-model-modifiers',
      component: VModelModifiers,
    },
    {
      path: '/v-if',
      name: 'v-if',
      component: Vif,
    },
    {
      path: '/v-show',
      name: 'v-show',
      component: Vshow,
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: Vfor,
    },
    {
      path: '/v-for-filter',
      name: 'v-for-filter',
      component: VforFilter,
    },
    {
      path: '/vue-instance',
      name: 'vue-instance',
      component: VueInstance,
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path: '/vue-filters',
      name: 'vue-filters',
      component: VueFilters,
    },
    {
      path: '/vue-global-filters',
      name: 'vue-global-filters',
      component: VueGlobalFilters,
    },
    {
      path: '/vue-chained-filters',
      name: 'vue-chained-filters',
      component: VueChainedFilters,
    },
    {
      path: '/vue-arguments-filters',
      name: 'vue-arguments-filters',
      component: VueArgumentsFilters,
    },
    {
      path: '/vue-watch',
      name: 'vue-watch',
      component: VueWatch,
    },
    {
      path: '/vue-watch-option',
      name: 'vue-watch-option',
      component: VueWatchOption,
    },
    {
      path: '/vue-computed',
      name: 'vue-computed',
      component: VueComputed,
    },
    {
      path: '/components-basic',
      name: 'components-basic',
      component: ComponentsBasic,
    },
    {
      path: '/components-global',
      name: 'components-global',
      component: ComponentsGlobal,
    },
    {
      path: '/components-props-check',
      name: 'components-props-check',
      component: ComponentsPropsCheck,
    },
    {
      path: '/components-props-passing',
      name: 'components-props-passing',
      component: ComponentsPropsPassing,
    },
    {
      path: '/components-lifecycle',
      name: 'components-lifecycle',
      component: ComponentsLifecycle,
    },
    {
      path: '/parent-pass-child',
      name: 'parent-pass-child',
      component: ParentPassChild,
    },
    {
      path: '/child-pass-parent',
      name: 'child-pass-parent',
      component: ChildPassParent,
    },
    {
      path: '/component-pass-component',
      name: 'component-pass-component',
      component: ComponentPassComponent,
    },
    {
      path: '/ref-dom',
      name: 'ref-dom',
      component: RefDom,
    },
    {
      path: '/ref-component',
      name: 'ref-component',
      component: RefComponent,
    },
    {
      path: '/vue-nexttick',
      name: 'vue-nexttick',
      component: VueNextTick,
    },
    {
      path: '/dynamic-components',
      name: 'dynamic-components',
      component: DynamicComponents,
    },
    {
      path: '/dynamic-components-keep-alive',
      name: 'dynamic-components-keep-alive',
      component: DynamicComponentsKeepAlive,
    },
    {
      path: '/slot-basic',
      name: 'slot-basic',
      component: SlotBasic,
    },
    {
      path: '/named-slot',
      name: 'named-slot',
      component: NamedSlot,
    },
    {
      path: '/scoped-slot',
      name: 'scoped-slot',
      component: ScopedSlot,
    },
    {
      path: '/dynamic-slot-names',
      name: 'dynamic-slot-names',
      component: DynamicSlotNames,
    },
    {
      path: '/custom-directives-basic',
      name: 'custom-directives-basic',
      component: CustomDirectivesBasic,
    },
    {
      path: '/custom-directives-function-shorthand',
      name: 'custom-directives-function-shorthand',
      component: CustomDirectivesFunctionShorthand,
    },
    {
      path: '/custom-directives-global',
      name: 'custom-directives-global',
      component: CustomDirectivesGlobal,
    },
    {
      path: '/vue-basic-command',
      name: 'vue-basic-command',
      component: VueBasicCommand,
    },
    {
      path: '/vue-components-cart',
      name: 'vue-components-cart',
      component: CartApp,
    },
  ],
})
