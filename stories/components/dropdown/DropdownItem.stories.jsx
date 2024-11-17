import React from "react";
import DropdownItem from "../../../components/dropdown/dropdownItem/DropdownItem";

const meta = {
  title: 'New design system/components/Dropdown',
  component: DropdownItem,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const DropdownItemExample = {
  args: {
    typeOfDropdown: 'Default',
    option: {
      label: 'Select',
      value: 'option1',
      name: 'option1',
      description: 'Description',
    },
    selected: false,
    withDescription: false,
    disabled: false,
  },
};

DropdownItemExample.storyName = 'DropdownItem';