import Uploader from '../s-uploader.vue'


Uploader.install = function (Vue) {
    Vue.component(Uploader.name, Uploader)
}

export default Uploader