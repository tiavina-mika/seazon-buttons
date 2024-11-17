import React from 'react';
import CalendarWithTimeIcon from '../../../components/icons/CalendarWithTime';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CalendarWithTime',
  component: CalendarWithTimeIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CalendarWithTime = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
