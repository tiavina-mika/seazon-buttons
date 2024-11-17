import React from 'react';
import PinIcon from '../../../components/icons/Pin';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Pin',
  component: PinIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Pin = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Pin.storyName = 'Pin'