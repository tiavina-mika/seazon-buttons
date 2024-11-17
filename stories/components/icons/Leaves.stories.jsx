import React from 'react';
import LeavesIcon from '../../../components/icons/Leaves';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Leaves',
  component: LeavesIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Leaves = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Leaves.storyName = 'Leaves'