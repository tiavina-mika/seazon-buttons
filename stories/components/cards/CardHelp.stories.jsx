import React from 'react';
import { fn } from '@storybook/test';
import CardHelpComponent from '../../../components/cards/cardHelp/CardHelp';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/cards/CardHelp',
  component: CardHelpComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardHelp = {
  args: {
    type: 'Default',
    icon: 'question-mark',
    title: 'Title',
    subTitle: 'Description',
    chevron: true,
    link: ''
  },
};
CardHelp.storyName = 'Card help question example';

export const CardHelpEmail = {
  args: {
    type: 'Default',
    icon: 'email',
    title: 'Title',
    subTitle: 'Description',
    chevron: false,
    link: 'e-mail address'
  },
};
CardHelpEmail.storyName = 'Card help email example';