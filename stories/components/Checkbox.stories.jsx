import React from "react";
import Checkbox from "../../components/checkbox/Checkbox";

const meta = {
  title: 'New design system/components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const CheckboxExample = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    error: false,
  },
};

CheckboxExample.storyName = 'Checkbox';