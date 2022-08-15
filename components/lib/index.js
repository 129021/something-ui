import Demo from './demo'
import Card from './card'
import Button from './button'
import Icon from './icon'
import Input from './input'
import InputNumber from './input-number'
import Radio from './radio'
import RadioGroup from './radio-group'
import CheckBox from './checkbox'

const components = {
    Demo,
    Card,
    Button,
    Icon,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    CheckBox,

}

const install = function (Vue) {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
}

const API = {
    install,
};

export default API;