import React from 'react';
import TagIcon from '../../../components/icons/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Tag',
  component: TagIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Tag = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Tag.storyName = 'Tag'