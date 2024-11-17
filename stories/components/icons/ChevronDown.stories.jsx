import React from 'react';
import ChevronDownIcon from '../../../components/icons/ChevronDown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ChevronDown',
  component: ChevronDownIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ChevronDown = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
