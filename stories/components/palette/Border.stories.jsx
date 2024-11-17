import React from 'react';
import BorderComponent from '../../../components/palette/Border';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/Palette/Border',
  component: BorderComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Border = {
  args: {
    variant: "neutral",
    color: "default",
  },
};
