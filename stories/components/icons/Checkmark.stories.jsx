import React from 'react';
import CheckCircleIcon from '../../../components/icons/CheckCircle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CheckCircle',
  component: CheckCircleIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CheckCircle = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
