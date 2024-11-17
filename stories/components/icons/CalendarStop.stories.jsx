import React from 'react';
import CalendarStopIcon from '../../../components/icons/CalendarStop';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CalendarStop',
  component: CalendarStopIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CalendarStop = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
