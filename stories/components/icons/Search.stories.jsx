import React from 'react';
import SearchIcon from '../../../components/icons/Search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Search',
  component: SearchIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Search = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Search.storyName = 'Search'