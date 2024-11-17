import React from 'react';
import DeliveryIcon from '../../../components/icons/Delivery';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Delivery',
  component: DeliveryIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Delivery = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
