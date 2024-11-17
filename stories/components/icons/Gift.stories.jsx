import React from 'react';
import GiftIcon from '../../../components/icons/Gift';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Gift',
  component: GiftIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Gift = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
    isNotification: false,
  },
};
