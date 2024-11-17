import React from 'react';
import WalkIcon from '../../../components/icons/Walk';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Walk',
  component: WalkIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Walk = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Walk.storyName = 'Walk'