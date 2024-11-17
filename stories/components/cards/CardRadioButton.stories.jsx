import React from "react";
import StorybookProvider from "../../StorybookProvider";
import CardRadioButtonTest from "./test/CardRadioButtonTest";
import { fn } from '@storybook/test';

const meta = {
  title: "New design system/components/cards/CardRadioButton",
  component: CardRadioButtonTest,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      options: ["Default", "Pressed", "Disabled"],
      control: {
        type: "radio",
      },
      description: "Type of the radio button",
    },
    selected: {
      control: "boolean",
      description: "Whether the radio button is selected",
    },
    label: {
      control: "text",
      description: "Label for the radio button",
    },
    subLabel: {
      control: "text",
      description: "Sub-label for the radio button",
    },
  },
};

export default meta;

const Template = (args) => (
  <StorybookProvider>
    <CardRadioButtonTest {...args} />
  </StorybookProvider>
);

export const CardsRadioButtonExample = Template.bind({});
CardsRadioButtonExample.args = {
  type: "Default",
  selected: true,
  label: "Postal address 00000 CITY",
  subLabel: "",
  onSelectedChange: fn(() => {})
};
