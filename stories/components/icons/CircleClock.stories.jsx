import React from 'react';
import CircleClockIcon from '../../../components/icons/CircleClock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CircleClock',
  component: CircleClockIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CircleClock = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
