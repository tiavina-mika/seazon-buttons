import React from 'react';
import TicketAddIcon from '../../../components/icons/TicketAdd';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/TicketAdd',
  component: TicketAddIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const TicketAdd = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
TicketAdd.storyName = 'TicketAdd'