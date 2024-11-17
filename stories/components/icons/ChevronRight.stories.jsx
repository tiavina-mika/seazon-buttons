import React from 'react';
import ChevronRightIcon from '../../../components/icons/ChevronRight';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ChevronRight',
  component: ChevronRightIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ChevronRight = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
