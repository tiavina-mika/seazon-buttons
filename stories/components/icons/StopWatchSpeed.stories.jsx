import React from 'react';
import StopWatchSpeedIcon from '../../../components/icons/StopWatchSpeed';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/StopWatchSpeed',
  component: StopWatchSpeedIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const StopWatchSpeed = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
StopWatchSpeed.storyName = 'StopWatchSpeed'