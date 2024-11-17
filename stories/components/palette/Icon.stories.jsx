import React from 'react';
import IconComponent from '../../../components/palette/Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/Palette/Icon',
  component: IconComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Icon = {
  args: {
    variant: "neutral",
    color: "default",
  },
};
