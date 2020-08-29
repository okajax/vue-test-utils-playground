import { mount } from '@vue/test-utils';
import Counter from './counter';

describe('Counter', () => {
  const wrapper = mount(Counter);

  it('counter exists', () => {
    const actual = wrapper.find('span.count').exists();
    expect(actual).toBe(true);
  });

  it('button exists', () => {
    const actual = wrapper.find('button').exists();
    expect(actual).toBe(true);
  });

  it('click increment button', () => {
    const init = wrapper.vm.$data.count;
    wrapper.find('button').trigger('click');
    const incremented = wrapper.vm.$data.count;

    expect(incremented).toBeGreaterThan(init);
  });

})
