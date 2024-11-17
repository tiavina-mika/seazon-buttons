import React from "react";
import InputDropdown from "../../../components/dropdown/inputDropdown/InputDropdown";

const meta = {
  title: "New design system/components/Dropdown",
  component: InputDropdown,
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const InputDropdownExample = {
  args: {
    label: 'Label',
    options: [
      { label: "Select 1", value: "select 1", description: "description 1" },
      { label: "Select 2", value: "select 2", description: "description 2" },
      { label: "Select 3", value: "select 3", description: "description 3" },
      { label: "Select 4", value: "select 4", description: "description 4" },
    ],
    supportingText: 'Supporting text.',
    error: false,
    errorText: 'Error.',
    disabled: false,
  },
};

InputDropdownExample.storyName = "InputDropdown";