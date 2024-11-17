import React from 'react';
import BankCardIcon from '../../../components/icons/BankCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/BankCard',
  component: BankCardIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const BankCard = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
