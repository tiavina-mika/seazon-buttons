import React from 'react';
import MicrowaveIcon from '../../../components/icons/Microwave';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Microwave',
  component: MicrowaveIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Microwave = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Microwave.storyName = 'Microwave'