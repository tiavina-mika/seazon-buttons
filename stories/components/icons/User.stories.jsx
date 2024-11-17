import React from 'react';
import UserIcon from '../../../components/icons/User';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/User',
  component: UserIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const User = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
User.storyName = 'User'