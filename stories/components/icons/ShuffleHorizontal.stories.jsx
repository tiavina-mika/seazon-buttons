import React from 'react';
import ShuffleHorizontalIcon from '../../../components/icons/ShuffleHorizontal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ShuffleHorizontal',
  component: ShuffleHorizontalIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ShuffleHorizontal = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
ShuffleHorizontal.storyName = 'ShuffleHorizontal'