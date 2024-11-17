import React from 'react';
import CallIcon from '../../../components/icons/Call';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Call',
  component: CallIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Call = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
