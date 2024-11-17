import React from 'react';
import PlusIcon from '../../../components/icons/Plus';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Plus',
  component: PlusIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Plus = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Plus.storyName = 'Plus'