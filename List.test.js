import { mount } from '@vue/test-utils';
import List from './List';

describe('List', () => {
  const wrapper = mount(List);

  it('sort by asc', () => {
    const expected = [
      'apple',
      'banana',
      'cola'
    ];
    wrapper.vm.sort();
    expect(wrapper.vm.$data.items).toStrictEqual(expected);
  });

  it('sort by desc', () => {
    const expected = [
      'cola',
      'banana',
      'apple'
    ];
    wrapper.vm.sort(true);
    expect(wrapper.vm.$data.items).toStrictEqual(expected);
  });

});
