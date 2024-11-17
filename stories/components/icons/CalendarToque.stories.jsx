import React from 'react';
import CalendarToqueIcon from '../../../components/icons/CalendarToque';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CalendarToque',
  component: CalendarToqueIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CalendarToque = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
