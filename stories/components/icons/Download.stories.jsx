import React from 'react';
import DownloadIcon from '../../../components/icons/Download';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Download',
  component: DownloadIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Download = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
