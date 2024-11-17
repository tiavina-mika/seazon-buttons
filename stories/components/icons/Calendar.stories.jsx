import React from 'react';
import CalendarIcon from '../../../components/icons/Calendar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Calendar',
  component: CalendarIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Calendar = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
