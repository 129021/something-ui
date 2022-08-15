import Message from './src/main.vue'

Message.install = function (Vue) {
    Vue.component(Message.name, Message)
}

export default Message