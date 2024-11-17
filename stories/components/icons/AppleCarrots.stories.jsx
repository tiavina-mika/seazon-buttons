import React from 'react';
import AppleCarrotsIcon from '../../../components/icons/AppleCarrots';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/AppleCarrots',
  component: AppleCarrotsIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const AppleCarrots = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
AppleCarrots.storyName = 'AppleCarrots';
