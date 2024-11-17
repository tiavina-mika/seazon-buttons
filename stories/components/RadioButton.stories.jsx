import React from "react";
import RadioButton from "../../components/radioButton/RadioButton";

const meta = {
  title: 'New design system/components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const RadioButtonExample = {
  args: {
    checked: false,
    disabled: false,
    error: false,
  },
};

RadioButtonExample.storyName = 'RadioButton';