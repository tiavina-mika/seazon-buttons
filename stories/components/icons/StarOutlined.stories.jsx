import React from 'react';
import StarOutlinedIcon from '../../../components/icons/StarOutlined';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/StarOutlined',
  component: StarOutlinedIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const StarOutlined = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
StarOutlined.storyName = 'StarOutlined'