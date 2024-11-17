import React from 'react';
import InfoCircleIcon from '../../../components/icons/InfoCircle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/InfoCircle',
  component: InfoCircleIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const InfoCircle = {
  args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
InfoCircle.storyName = 'InfoCircle';
