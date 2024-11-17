import React from 'react';
import ColorsComponent from '../../../components/palette/Colors';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/Palette/Colors',
  component: ColorsComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Colors = {
  args: {},
};
