import React from 'react';
import CarrotIcon from '../../../components/icons/Carrot';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Carrot',
  component: CarrotIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Carrot = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
