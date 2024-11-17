import React from 'react';
import TitleComponent from '../../../components/typography/Title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Typography/Title',
  component: TitleComponent, 
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      }
    }
  }
};

export default meta;

export const Title = {
  args: {
    variant: 'h1',
		text: 'Title'
  },
};