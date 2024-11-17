import React from 'react';
import ChevronUpIcon from '../../../components/icons/ChevronUp';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ChevronUp',
  component: ChevronUpIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ChevronUp = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
