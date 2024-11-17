import React from 'react';
import Bag2Icon from '../../../components/icons/Bag2';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Bag2',
  component: Bag2Icon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Bag2 = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
