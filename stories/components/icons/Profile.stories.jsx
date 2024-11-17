import React from 'react';
import ProfileIcon from '../../../components/icons/Profile';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Profile',
  component: ProfileIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Profile = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Profile.storyName = 'Profile'