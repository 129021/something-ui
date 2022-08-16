import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import Demo from '../components/lib/demo/index.js'

import '../components/css/card.scss'
import Card from '../components/lib/card/index'

// import '../components/css/button.scss'
import Button from '../components/lib/button/index'

import Icon from '../components/lib/icon/index'

import Input from '../components/lib/input/index'


import InputNumber from '../components/lib/input-number/index'

import Radio from '../components/lib/radio/index'

import RadioGroup from '../components/lib/radio-group/index'

import CheckBox from '../components/lib/checkbox/index'

import CheckBoxGroup from '../components/lib/checkbox-group/index'

import Message from '../components/lib/message/index'

import MessageBox from '../components/lib/message-box/index'

import Modal from '../components/lib/modal/index'

import Toast from '../components/lib/toast/index'

import Uploader from '../components/lib/uploader/index'
Vue.use(Demo)
Vue.use(Card)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(CheckBox)
Vue.use(CheckBoxGroup)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Modal)
Vue.use(Toast)
Vue.use(Uploader)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')