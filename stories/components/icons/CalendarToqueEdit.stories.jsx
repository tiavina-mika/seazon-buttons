import React from 'react';
import CalendarToqueEditIcon from '../../../components/icons/CalendarToqueEdit';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/CalendarToqueEdit',
  component: CalendarToqueEditIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const CalendarToqueEdit = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
