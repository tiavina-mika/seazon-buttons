import React from 'react';
import ErrorCircleIcon from '../../../components/icons/ErrorCircle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ErrorCircle',
  component: ErrorCircleIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ErrorCircle = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
