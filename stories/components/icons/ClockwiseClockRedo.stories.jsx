import React from 'react';
import ClockwiseClockRedoIcon from '../../../components/icons/ClockwiseClockRedo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ClockwiseClockRedo',
  component: ClockwiseClockRedoIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ClockwiseClockRedo = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
