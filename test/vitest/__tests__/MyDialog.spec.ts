import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyDialog from '../../src/components/MyDialog.vue';

import { installQuasarPlugin } from '../setup';

installQuasarPlugin({});

describe('MyDialog', () => {
  test('should mount the document body and expose for testing', () => {
    const wrapper = mount(MyDialog, {
      props: {
        isDialogOpen: true,
      },
    });

    expect(wrapper.find('.q-dialog')?.exists()).toBeTruthy();
  });

  test('can check the inner text of the dialog', () => {
    const wrapper = mount(MyDialog, {
      props: {
        isDialogOpen: true,
      },
    });
    expect(wrapper.find('.q-dialog')?.html()).toContain(
      'Custom dialog which should be tested'
    );
  });
});
