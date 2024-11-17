import React from 'react';
import InstagramIcon from '../../../components/icons/Instagram';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Instagram',
  component: InstagramIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Instagram = {
  args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};

