import React from 'react';
import ClockAddPlusIcon from '../../../components/icons/ClockAddPlus';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ClockAddPlus',
  component: ClockAddPlusIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ClockAddPlus = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};