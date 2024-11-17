import React from 'react';
import PepperFilledIcon from '../../../components/icons/PepperFilled';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/PepperFilled',
  component: PepperFilledIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const PepperFilled = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
PepperFilled.storyName = 'PepperFilled'