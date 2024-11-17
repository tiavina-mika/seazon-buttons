import React from "react";
import Dropdown from "../../../components/dropdown/Dropdown";

const meta = {
  title: "New design system/components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const DropdownExample = {
  args: {
    withButton: false,
    options: [
      { label: "Select", value: "select 1", description: "description 1" },
      { label: "Select", value: "select 2", description: "description 2" },
      { label: "Select", value: "select 3", description: "description 3" },
      { label: "Select", value: "select 4", description: "description 4" },
    ],
    error: false,
    onSecondaryClick: () => {},
    onPrimaryClick: () => {},
    secondaryText: "Annuler",
    primaryText: "Appliquer",
  },
};

DropdownExample.storyName = "Dropdown";