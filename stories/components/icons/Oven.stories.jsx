import React from 'react';
import OvenIcon from '../../../components/icons/Oven';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Oven',
  component: OvenIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Oven = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Oven.storyName = 'Oven'