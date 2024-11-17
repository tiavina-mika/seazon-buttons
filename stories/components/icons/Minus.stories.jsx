import React from 'react';
import MinusIcon from '../../../components/icons/Minus';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Minus',
  component: MinusIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Minus = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Minus.storyName = 'Minus'