import React from 'react';
import DoubleTapIcon from '../../../components/icons/DoubleTap';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/DoubleTap',
  component: DoubleTapIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const DoubleTap = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
