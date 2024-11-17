import React from 'react';
import CloseRemoveIcon from '../../../components/icons/CloseRemove';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CloseRemove',
  component: CloseRemoveIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CloseRemove = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
