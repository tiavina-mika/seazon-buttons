import React from 'react';
import { fn } from '@storybook/test';
import CardNotificationComponent from '../../../components/cards/CardNotification/CardNotification';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/cards/CardNotification',
  component: CardNotificationComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardNotification = {
  args: {
    isNew: true,
    title: 'Titre',
    description: 'Description',
    date: '2024-10-10',
    image: '/pictures/card-notification-no-image.svg',
    buttonLabel: 'Button',
    buttonAction: fn(() => {})
  },
};

CardNotification.storyName = 'Card Notification example';