import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import Demo from '../components/lib/demo/index.js'

import '../components/css/card.scss'
import Card from '../components/lib/card/index'

import '../components/css/button.scss'
import Button from '../components/lib/button/index'

import '../components/css/icon.scss'
import Icon from '../components/lib/icon/index'

import '../components/css/input.scss'
import Input from '../components/lib/input/index'

import '../components/css/input-number.scss'
import InputNumber from '../components/lib/input-number/index'

import '../components/css/radio.scss'
import Radio from '../components/lib/radio/index'

import '../components/css/radio-group.scss'
import RadioGroup from '../components/lib/radio-group/index'

import '../components/css/checkbox.scss'
import CheckBox from '../components/lib/checkbox/index'

import '../components/css/checkbox-group.scss'
import CheckBoxGroup from '../components/lib/checkbox-group/index'

import '../components/css/message.scss'
import Message from '../components/lib/message/index'

import '../components/css/message-box.scss'
import MessageBox from '../components/lib/message-box/index'

import '../components/css/modal.scss'
import Modal from '../components/lib/modal/index'

import '../components/css/toast.scss'
import Toast from '../components/lib/toast/index'

import '../components/css/uploader.scss'
import '../components/css/preview.scss'
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


// import "something-ui/dist/css/index.css";
// import SUI from 'something-ui'
// Vue.use(SUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')