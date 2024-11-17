import React from 'react';
import { fn } from '@storybook/test';
import ProgressBarButtonWithContact from '../../../../components/buttons/buttonsWithContact/ProgressBarButtonWithContact';

const meta = {
  title: 'New design system/components/buttons/With contact/ProgressBar',
  component: ProgressBarButtonWithContact,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const DefaultProgressBarButtonWithContact = {
  args: {
    text: 'Button',
    onClick: fn(),
  },
};
DefaultProgressBarButtonWithContact.storyName = 'Button';
