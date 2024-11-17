import React from 'react';
import IconButton from '../../../components/buttons/IconButton/test/IconButtonTest';

const meta = {
  title: 'New design system/components/buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { 
        type: 'radio',
        labels: {
          sm: 'Icon 24',
          md: 'Icon 32'
        },
      },
    },
  },

};

export default meta;

export const Button = {
  args: {
    size: 'md',
    variant: 'default',
  },
};
Button.storyName = 'IconButton';

