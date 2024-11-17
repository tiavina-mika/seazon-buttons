import React from 'react';
import Walk2Icon from '../../../components/icons/Walk2';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Walk2',
  component: Walk2Icon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Walk2 = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Walk2.storyName = 'Walk2'