import React from "react";
import Select from "../../../components/dropdown/select/Select";

const meta = {
  title: 'New design system/components/Dropdown',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const SelectItemExample = {
  args: {
    label: 'Label',
    disabled: false,
    active: false,
  }
};

SelectItemExample.storyName = 'Select';