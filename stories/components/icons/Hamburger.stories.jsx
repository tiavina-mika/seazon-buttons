import React from 'react';
import HamburgerIcon from '../../../components/icons/Hamburger';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Hamburger',
  component: HamburgerIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Hamburger = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
