import React from 'react';
import PencilIcon from '../../../components/icons/Pencil';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Pencil',
  component: PencilIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Pencil = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Pencil.storyName = 'Pencil'