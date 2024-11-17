import React from 'react';
import SliderComponent from './test/SliderPrefTest';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/fields/SliderField',
  component: SliderComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  }
};

export default meta;

export const SliderField = {
}
