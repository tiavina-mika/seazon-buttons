import React from 'react';
import { fn } from '@storybook/test';
import ButtonGroup from '../../../components/buttons/buttonGroup/ButtonGroup';

const meta = {
  title: 'New design system/components/buttons/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const DefaultButtonGroup = {
  args: {
    text: 'Button',
    secondaryText: 'Button',
    onSecondaryClick: fn(),
    onClick: fn(),
  },
};
DefaultButtonGroup.storyName = 'ButtonGroup';


export const Alone = {
  args: {
    text: 'Button',
    onSecondaryClick: null,
  },
};