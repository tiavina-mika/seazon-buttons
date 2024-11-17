import React from "react";
import dropdownActive from "../../../components/dropdown/dropdownActive/DropdownActive";

const meta = {
  title: 'New design system/components/Dropdown',
  component: dropdownActive,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const DropdownActiveItemExample = {
  args: {
    label: 'Allergènes',
    active: true,
    options: [
      { label: "Select", value: "select 1", description: "description 1" },
      { label: "Select", value: "select 2", description: "description 2" },
      { label: "Select", value: "select 3", description: "description 3" },
      { label: "Select", value: "select 4", description: "description 4" },
    ],
    onSecondaryClick: () => {},
    onPrimaryClick: () => {},
    secondaryText: 'Annuler',
    primaryText: 'Appliquer',
  }
};

DropdownActiveItemExample.storyName = 'DropdownActive';