import React from 'react';
import EmailIcon from '../../../components/icons/Email';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Email',
  component: EmailIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Email = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
