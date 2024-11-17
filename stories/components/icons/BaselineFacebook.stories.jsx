import React from 'react';
import BaselineFacebookIcon from '../../../components/icons/BaselineFacebook';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/BaselineFacebook',
  component: BaselineFacebookIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const BaselineFacebook = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
