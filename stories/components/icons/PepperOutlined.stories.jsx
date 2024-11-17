import React from 'react';
import PepperOutlinedIcon from '../../../components/icons/PepperOutlined';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/PepperOutlined',
  component: PepperOutlinedIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const PepperOutlined = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
PepperOutlined.storyName = 'PepperOutlined'