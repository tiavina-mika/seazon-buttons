import React from 'react';
import HeartRateIcon from '../../../components/icons/HeartRate';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/HeartRate',
  component: HeartRateIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const HeartRate = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
