import React from 'react';
import StarCircleIcon from '../../../components/icons/StarCircle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/StarCircle',
  component: StarCircleIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const StarCircle = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
StarCircle.storyName = 'StarCircle'