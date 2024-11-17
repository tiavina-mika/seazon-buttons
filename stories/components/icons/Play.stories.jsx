import React from 'react';
import PlayIcon from '../../../components/icons/Play';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Play',
  component: PlayIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Play = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Play.storyName = 'Play'