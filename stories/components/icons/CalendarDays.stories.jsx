import React from 'react';
import CalendarDaysIcon from '../../../components/icons/CalendarDays';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CalendarDays',
  component: CalendarDaysIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CalendarDays = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
