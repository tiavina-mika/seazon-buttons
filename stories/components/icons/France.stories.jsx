import React from 'react';
import FranceIcon from '../../../components/icons/France';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/France',
  component: FranceIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const France = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
