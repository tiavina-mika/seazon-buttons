import React from 'react';
import TiktokIcon from '../../../components/icons/Tiktok';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Tiktok',
  component: TiktokIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Tiktok = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Tiktok.storyName = 'Tiktok'