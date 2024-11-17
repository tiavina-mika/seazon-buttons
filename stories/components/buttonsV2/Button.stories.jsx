import React from 'react';
import Button from '../../../components/buttons/button/Button';
import Delete from '../../../components/icons/Delete';
import { sizeLabels } from '../../utils';

const meta = {
  title: 'New design system/components/buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: ['sm', 'md', 'lg'],
    size: {
      control: {
        type: 'radio',
        labels: sizeLabels
      },
    },
  }
};

export default meta;

export const DefaultButton = {
  args: {
    text: 'se connecter',
    rightIcon: null
  },
};
DefaultButton.storyName = 'Button';


export const ButtonWithIcon = {
  args: {
    text: 'Label',
    rightIcon: <Delete size="sm" color="#003840" />,
  },
};
ButtonWithIcon.storyName = 'With right icon';