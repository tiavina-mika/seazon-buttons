import React from 'react';
import SnowIcon from '../../../components/icons/Snow';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Snow',
  component: SnowIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Snow = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Snow.storyName = 'Snow'