import React from 'react';
import EyeIcon from '../../../components/icons/Eye';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Eye',
  component: EyeIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Eye = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
