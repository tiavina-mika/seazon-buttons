import React, { useEffect } from 'react';
import { useArgs } from '@storybook/preview-api';

import TextComponent from '../../../components/typography/Text';
import { textVariants } from '../../../components/typography/typography.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Typography/Text',
  component: TextComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  argTypes: {
    scale: {
      control: { type: 'radio', options: ['body', 'line'] }
    },
    variant: {
      control: {
        type: 'select'
      },
      options: textVariants //['base', 'medium']
    }
  }
};

export default meta;

const Template = (args) => {
  const [{ scale, variant }, updateArgs] = useArgs();


  useEffect(() => {
    const lineVariants = ['base', 'medium', 'link', 'smallMedium', 'smallStrikethrough'];
    if (scale === 'line' && !lineVariants.includes(variant)) {
      updateArgs({ scale: 'body' });
    }
    if (scale === 'body' && variant === 'smallStrikethrough') {
      updateArgs({ scale: 'line' });
    }

  }, [scale, variant]);

  return <TextComponent {...args} />
};

export const Text = Template.bind({});

Text.args = {
  variant: 'base',
  text: 'text body',
  scale: 'line'
};