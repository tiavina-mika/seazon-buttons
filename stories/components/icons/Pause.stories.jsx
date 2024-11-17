import React from 'react';
import PauseIcon from '../../../components/icons/Pause';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Pause',
  component: PauseIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Pause = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Pause.storyName = 'Pause'