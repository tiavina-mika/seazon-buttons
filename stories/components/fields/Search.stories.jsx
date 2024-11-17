import React from 'react';
import SearchComponent from './test/SearchTest';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/fields/Search',
  component: SearchComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  }
};

export default meta;

export const Search = {
	disabled: false,
	error: ''
}