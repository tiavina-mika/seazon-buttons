import React from 'react';
import DeliveryBoxIcon from '../../../components/icons/DeliveryBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/DeliveryBox',
  component: DeliveryBoxIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const DeliveryBox = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
