import React from 'react';
import ErrorTriangleIcon from '../../../components/icons/ErrorTriangle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/ErrorTriangle',
  component: ErrorTriangleIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const ErrorTriangle = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
