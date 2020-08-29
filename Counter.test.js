import { mount } from '@vue/test-utils';
import Counter from './counter';

describe('Counter', () => {
  const wrapper = mount(Counter);

  it('counter exists', () => {
    const el = wrapper.find('span.count');
    expect(el.exists()).toBe(true);
  });

  it('button exists', () => {
    const el = wrapper.find('button');
    expect(el.exists()).toBe(true);
  });

  it('click increment button', () => {
    const button = wrapper.find('button');

    const init = wrapper.vm.$data.count;
    button.trigger('click');
    const incremented = wrapper.vm.$data.count;

    expect(incremented).toBeGreaterThan(init);
  });

})
