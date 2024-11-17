import React from 'react';
import BackgroundComponent from '../../../components/palette/Background';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/Palette/Background',
  component: BackgroundComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Background = {
  args: {
    variant: "neutral",
    color: "default",
  },
};
