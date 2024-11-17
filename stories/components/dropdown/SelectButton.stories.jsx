import React from "react";
import SelectButton from "../../../components/dropdown/selectButton/SelectButton";

const meta = {
  title: 'New design system/components/Dropdown',
  component: SelectButton,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const SelectButtonItemExample = {
  args: {
    label: 'Label',
    active: false,
  }
};

SelectButtonItemExample.storyName = 'SelectButton';