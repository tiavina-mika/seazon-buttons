import React from 'react';
import BagIcon from '../../../components/icons/Bag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Bag',
  component: BagIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Bag = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
    isNotification: false,
  },
};
