import React from 'react';
import RingtoneNotificationIcon from '../../../components/icons/RingtoneNotification';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/RingtoneNotification',
  component: RingtoneNotificationIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const RingtoneNotification = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
RingtoneNotification.storyName = 'RingtoneNotification'