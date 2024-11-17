import React from 'react';
import HideIcon from '../../../components/icons/Hide';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Hide',
  component: HideIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Hide = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
Hide.storyName = 'Hide';
