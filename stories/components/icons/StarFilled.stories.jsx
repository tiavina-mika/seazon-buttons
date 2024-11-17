import React from 'react';
import StarFilledIcon from '../../../components/icons/StarFilled';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/StarFilled',
  component: StarFilledIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const StarFilled = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
StarFilled.storyName = 'StarFilled'