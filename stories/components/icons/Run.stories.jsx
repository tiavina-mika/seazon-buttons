import React from 'react';
import RunIcon from '../../../components/icons/Run';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Run',
  component: RunIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Run = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Run.storyName = 'Run'