import Demo from './demo'
import Card from './card'
import Button from './button'
import Icon from './icon'
import Input from './input'
import InputNumber from './input-number'
import Radio from './radio'
import RadioGroup from './radio-group'
import CheckBox from './checkbox'
import CheckBoxGroup from './checkbox-group'
import Message from './message'
import MessageBox from './message-box'
import Modal from './modal'
import Toast from './toast'
import Uploader from './uploader'


const componentsList = [
    Demo,
    Card,
    Button,
    Icon,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    CheckBox,
    CheckBoxGroup,
    Message,
    MessageBox,
    Modal,
    Toast,
    Uploader

]

const install = function (Vue) {
    if (install.installed) return;

    // Object.keys(components).forEach(key => {
    //     Vue.component(components[key].name, components[key]);
    // });
    componentsList.map((component) => {
        Vue.use(component)
    })
}

// const API = {

// };

export default {
    install,
    Demo,
    Card,
    Button,
    Icon,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    CheckBox,
    CheckBoxGroup,
    Message,
    MessageBox,
    Modal,
    Toast,
    Uploader

};