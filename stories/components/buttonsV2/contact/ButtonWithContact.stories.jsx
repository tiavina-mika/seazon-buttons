import React from 'react';
import { fn } from '@storybook/test';
import ButtonWithContact from '../../../../components/buttons/buttonsWithContact/ButtonWithContact';

const meta = {
  title: 'New design system/components/buttons/With contact/Button',
  component: ButtonWithContact,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const DefaultButtonWithContact = {
  args: {
    text: 'Button',
    onClick: fn(),
  },
};
DefaultButtonWithContact.storyName = 'Button';
