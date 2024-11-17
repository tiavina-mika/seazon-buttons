import React from 'react';
import { fn } from '@storybook/test';
import ShoppingButtonWithContact from '../../../../components/buttons/buttonsWithContact/ShoppingButtonWithContact';

const meta = {
  title: 'New design system/components/buttons/With contact/Shopping',
  component: ShoppingButtonWithContact,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const DefaultShoppingButtonWithContact = {
  args: {
    text: 'Button',
    onClick: fn(),
  },
};
DefaultShoppingButtonWithContact.storyName = 'Button';
