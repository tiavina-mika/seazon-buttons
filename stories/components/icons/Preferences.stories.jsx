import React from 'react';
import PreferencesIcon from '../../../components/icons/Preferences';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Preferences',
  component: PreferencesIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Preferences = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
    isNotification: false,
  },
};
Preferences.storyName = 'Preferences'