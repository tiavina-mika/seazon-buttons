import React from 'react';
import MessageIcon from '../../../components/icons/Message';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Message',
  component: MessageIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Message = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Message.storyName = 'Message'