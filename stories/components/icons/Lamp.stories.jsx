import React from 'react';
import LampIcon from '../../../components/icons/Lamp';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Lamp',
  component: LampIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Lamp = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Lamp.storyName = 'Lamp'