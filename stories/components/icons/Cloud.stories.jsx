import React from 'react';
import CloudIcon from '../../../components/icons/Cloud';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Cloud',
  component: CloudIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Cloud = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};