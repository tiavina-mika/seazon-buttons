import React from 'react';
import KitchenHatIcon from '../../../components/icons/KitchenHat';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/KitchenHat',
  component: KitchenHatIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const KitchenHat = {
  args: {
    args: {
      size: 'md',
      color: '#435B67',
      disabled: false,
    },
  },
};
