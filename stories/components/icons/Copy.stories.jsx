import React from 'react';
import CopyIcon from '../../../components/icons/Copy';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Copy',
  component: CopyIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Copy = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
