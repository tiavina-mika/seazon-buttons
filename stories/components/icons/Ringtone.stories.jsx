import React from 'react';
import RingtoneIcon from '../../../components/icons/Ringtone';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Ringtone',
  component: RingtoneIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Ringtone = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Ringtone.storyName = 'Ringtone'