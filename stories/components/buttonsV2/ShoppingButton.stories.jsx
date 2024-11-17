import React from 'react';
import ShoppingButton from '../../../components/buttons/shopping/ShoppingButton';
import { sizeLabels } from '../../utils';

const meta = {
  title: 'New design system/components/buttons/Shopping',
  component: ShoppingButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: ['sm', 'md', 'lg'],
    size: {
      control: {
        type: 'radio', 
        labels: sizeLabels
      },
    },
  }
};

export default meta;

export const Shopping = {
  args: {
    variant: "default",
    size: "md",
    disabled: false,
    loading: false,
    value: 1,
  },
};

