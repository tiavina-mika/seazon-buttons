import React from 'react';
import DeleteIcon from '../../../components/icons/Delete';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Delete',
  component: DeleteIcon,
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;

export const Delete = {
  args: {
    size: 'md',
    
    color: '#435B67',
    disabled: false,
  },
};
