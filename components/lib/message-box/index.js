import MessageBox from './src/main.vue'


// MessageBox.install = function (Vue) {
//     function generateInstance(options) {
//         const Ctor = Vue.extend(MessageBox)

//         let instance = new Ctor({
//             propsData: options
//         }).$mount(document.createElement('div'));

//         return instance
//     }

//     Vue.prototype.$confirm = function (options) {
//         generateInstance(options)
//     }

//     Vue.prototype.$alert = function (options) {
//         generateInstance(
//             Object.assign(options, {
//                 type: 'alert',

//             })
//         )
//     }
// }

// export default MessageBox

// export default {
//     install(Vue) {
//         function generateInstance(options) {
//             const Ctor = Vue.extend(MessageBox)

//             let instance = new Ctor({
//                 propsData: options
//             }).$mount(document.createElement('div'));

//             return instance
//         }

//         Vue.prototype.$confirm = function (options) {
//             generateInstance(options)
//         }

//         Vue.prototype.$alert = function (options) {
//             generateInstance(
//                 Object.assign(options, {
//                     type: 'alert',

//                 })
//             )
//         }
//     }
// }


export default {
    install(Vue) {
        function generateInstance(options) {
            const Ctor = Vue.extend(MessageBox)

            let instance = new Ctor({
                propsData: options,
            }).$mount(document.createElement('div'))

            return instance
        }

        Vue.prototype.$confirm = function (options) {
            generateInstance(options)
        }

        Vue.prototype.$alert = function (options) {
            generateInstance(
                Object.assign(options, {
                    type: 'alert',
                })
            )
        }
    },
}