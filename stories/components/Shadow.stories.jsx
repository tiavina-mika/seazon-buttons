// Shadow.stories.jsx
import React from 'react';
import ShadowBox from '../../components/ShadowBox/ShadowBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Shadow',
  component: ShadowBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Shadow = {
  args: {
    size: 100,
  },
};