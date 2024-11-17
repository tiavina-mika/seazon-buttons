import React from 'react';
import TextComponent from '../../../components/palette/Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/Palette/Text',
  component: TextComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Text = {
  args: {
    variant: "neutral",
    color: "default",
  },
};
