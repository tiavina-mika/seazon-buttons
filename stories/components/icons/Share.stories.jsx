import React from 'react';
import ShareIcon from '../../../components/icons/Share';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Share',
  component: ShareIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Share = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Share.storyName = 'Share'