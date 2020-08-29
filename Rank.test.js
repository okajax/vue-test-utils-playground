import { mount } from '@vue/test-utils';
import Rank from './Rank';

describe('Rank', () => {
  const wrapper = mount(Rank);

  it.each([
    [1, 1],
    [49, 1],
    [50, 2],
    [51, 2],
    [99, 2],
    [100, 3],
    [101, 3],
  ])('rank when score is %d', async (score, expected) => {
    await wrapper.setProps({ score });
    expect(wrapper.vm.rank).toBe(expected);
  });

});
