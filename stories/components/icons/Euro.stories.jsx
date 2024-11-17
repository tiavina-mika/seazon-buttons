import React from 'react';
import EuroIcon from '../../../components/icons/Euro';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Euro',
  component: EuroIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Euro = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
