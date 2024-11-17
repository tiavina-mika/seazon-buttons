import React from 'react';
import QuestionMarkCircleIcon from '../../../components/icons/QuestionMarkCircle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/QuestionMarkCircle',
  component: QuestionMarkCircleIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const QuestionMarkCircle = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
QuestionMarkCircle.storyName = 'QuestionMarkCircle'