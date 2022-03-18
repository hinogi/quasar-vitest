import { describe, expect, test } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { QBtn } from 'quasar';
import MyButton from './demo/MyButton.vue';
import { installQuasarPlugin } from '../setup';

installQuasarPlugin({});

describe('MyButton', () => {
  test('has increment method', () => {
    const wrapper = mount(MyButton);
    const { vm } = wrapper;

    expect(typeof vm.increment).toBe('function');
  });

  test('can check the inner text content', () => {
    const wrapper = mount(MyButton);
    const { vm } = wrapper;

    expect((vm.$el as HTMLElement).textContent).toContain('rocket muffin');
    expect(wrapper.find('.content').text()).toContain('rocket muffin');
  });

  test('sets the correct default data', () => {
    const wrapper = mount(MyButton);
    const { vm } = wrapper;

    expect(typeof vm.counter).toBe('number');
    expect(vm.counter).toBe(0);
  });

  test('correctly updates counter when button is pressed', async () => {
    const wrapper = shallowMount(MyButton);
    const { vm } = wrapper;
    const button = wrapper.findComponent(QBtn);
    await button.trigger('click');
    expect(vm.counter).toBe(1);
  });
});
