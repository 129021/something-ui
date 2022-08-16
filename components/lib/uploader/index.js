import Uploader from './src/main.vue'


Uploader.install = function (Vue) {
    Vue.component(Uploader.name, Uploader)
}

export default Uploader