import Vue from 'vue'
import Conquer from './Conquer'
import store from './store'

Vue.config.productionTip = false

new Vue({ store, render: app => app(Conquer) }).$mount('#conquer')
