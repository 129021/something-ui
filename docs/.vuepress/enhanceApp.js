import Card from './components/js/s-card'
import Button from './components/js/s-button'
import Icon from './components/js/s-icon'
import Input from './components/js/s-input'
import InputNumber from './components/js/s-inputnumber'
import Radio from './components/js/s-radio'
import RadioGroup from './components/js/s-radiogroup'
import CheckBox from './components/js/s-checkbox'
import CheckBoxGroup from './components/js/s-checkboxgroup'
import Message from './components/js/s-message'
import MessageBox from './components/js/s-messagebox'
import Modal from './components/js/s-modal'
import Toast from './components/js/s-toast'
import Uploader from './components/js/s-uploader'
import Preview from './components/js/preview'
// import iconfont from './components/js/iconfont'

// import 'animate.css'
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // Vue.use(Card).use(Message).use(MessageBox).use(Button).use(Icon).use(Input).use(InputNumber).use(Radio).use(RadioGroup).use(CheckBox).use(CheckBoxGroup).use(Modal).use(Toast).use(Uploader)


  Vue.mixin({
    mounted() {
      Vue.use(Card).use(Message).use(MessageBox).use(Button).use(Icon).use(Input).use(InputNumber).use(Radio).use(RadioGroup).use(CheckBox).use(CheckBoxGroup).use(Modal).use(Toast).use(Uploader).use(Preview).use(iconfont);

      
    },
  })





}