/* vue 框架示例页面路由 */
import HelloWorld from '@/components/HelloWorld'
import Mustache from '@/views/directive/Mustache'
import Vtext from '@/views/directive/V-text'
import Vhtml from '@/views/directive/V-html'
import Vbind from '@/views/directive/V-bind'
import VbindClass from '@/views/directive/V-bind-class'
import VbindStyle from '@/views/directive/V-bind-style'
import JsExpression from '@/views/directive/Js-expression'
import Von from '@/views/directive/V-on'
import VonFunction from '@/views/directive/V-on-function'
import VonEventModifiers from '@/views/directive/V-on-event-modifiers'
import VonKeyModifiers from '@/views/directive/V-on-key-modifiers'
import VModel from '@/views/directive/V-model'
import VModelModifiers from '@/views/directive/V-model-modifiers'
import Vif from '@/views/directive/V-if'
import Vshow from '@/views/directive/V-show'
import Vfor from '@/views/directive/V-for'
import VforFilter from '@/views/directive/V-for-filter'
import VueQuickstart from '@/views/Vue-quickstart'
import VueInstance from '@/views/Vue-instance'
import VueFilters from '@/views/filters/Vue-filters'
import VueGlobalFilters from '@/views/filters/Vue-global-filters'
import VueChainedFilters from '@/views/filters/Vue-chained-filters'
import VueArgumentsFilters from '@/views/filters/Vue-arguments-filters'
import VueWatch from '@/views/watchers/Vue-watch'
import VueWatchOption from '@/views/watchers/Vue-watch-option'
import VueComputed from '@/views/computed-properties/Vue-computed'
import ComponentsBasic from '@/views/components-sample/Components-basic'
import ComponentsGlobal from '@/views/components-sample/Components-global'
import ComponentsPropsCheck from '@/views/components-sample/Components-props-check'
import ComponentsPropsPassing from '@/views/components-sample/Components-props-passing'
import ComponentsLifecycle from '@/views/components-sample/Components-lifecycle'
import ParentPassChild from '@/views/components-sample/Parent-pass-child'
import ChildPassParent from '@/views/components-sample/Child-pass-parent'
import ComponentPassComponent from '@/views/components-sample/Component-pass-component'
import RefDom from '@/views/refs-attribute/Ref-dom'
import RefComponent from '@/views/refs-attribute/Ref-component'
import VueNextTick from '@/views/lifecycle-method/Vue-nexttick'
import DynamicComponents from '@/views/components-sample/Dynamic-components'
import DynamicComponentsKeepAlive from '@/views/components-sample/Dynamic-components-keep-alive'
import SlotBasic from '@/views/slot/Slot-basic'
import NamedSlot from '@/views/slot/Named-slot'
import ScopedSlot from '@/views/slot/Scoped-slot'
import DynamicSlotNames from '@/views/slot/Dynamic-slot-names'
import CustomDirectivesBasic from '@/views/custom-directives/Custom-directives-basic'
import CustomDirectivesFunctionShorthand from '@/views/custom-directives/Custom-directives-function-shorthand'
import CustomDirectivesGlobal from '@/views/custom-directives/Custom-directives-global'

export default [
  {
    path: '/v-text',
    name: Vtext.name,
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
    path: '/v-bind-class',
    name: 'v-bind-class',
    component: VbindClass,
  },
  {
    path: '/v-bind-style',
    name: 'v-bind-style',
    component: VbindStyle,
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
]
