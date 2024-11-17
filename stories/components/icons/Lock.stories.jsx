import React from 'react';
import LockIcon from '../../../components/icons/Lock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Lock',
  component: LockIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Lock = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
