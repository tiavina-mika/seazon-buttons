import React from 'react';
import MedalIcon from '../../../components/icons/Medal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Medal',
  component: MedalIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Medal = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
Medal.storyName = 'Medal'