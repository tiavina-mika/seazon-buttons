import React from 'react';
import ArrowLeftIcon from '../../../components/icons/ArrowLeft';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ArrowLeft',
  component: ArrowLeftIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ArrowLeft = {
  args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
