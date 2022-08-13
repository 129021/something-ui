import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import Demo from  '../components/lib/demo/index.js'

import '../components/css/card.scss'
import Card from '../components/lib/card/index'

// import '../components/css/button.scss'
import Button from '../components/lib/button/index'

import Icon from '../components/lib/icon/index'

import Input from '../components/lib/input/index'

Vue.use(Demo)
Vue.use(Card)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
