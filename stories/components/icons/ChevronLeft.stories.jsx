import React from 'react';
import ChevronLeftIcon from '../../../components/icons/ChevronLeft';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ChevronLeft',
  component: ChevronLeftIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ChevronLeft = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
