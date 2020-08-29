import { mount } from '@vue/test-utils';
import Counter from './Counter';

const wrapper = mount(Counter);
const vm = wrapper.vm;

console.log('hello my first test');
console.log(wrapper);
console.log(vm);
