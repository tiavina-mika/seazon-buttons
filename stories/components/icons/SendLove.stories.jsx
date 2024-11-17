import React from 'react';
import SendLoveIcon from '../../../components/icons/SendLove';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/SendLove',
  component: SendLoveIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const SendLove = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
SendLove.storyName = 'SendLove'