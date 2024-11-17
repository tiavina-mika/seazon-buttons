import React from "react";
import StorybookProvider from "../../StorybookProvider";
import ModalDSSimple from "../../../components/modals/modalDSSimple/modalDSSimple";
import { fn } from "@storybook/test";

const meta = {
  title: "New design system/components/modale/ModalDSSimple",
  component: ModalDSSimple,
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
};

export default meta;

const Template = (args) => (
  <StorybookProvider>
    <ModalDSSimple {...args} />
  </StorybookProvider>
);

export const ModalDSSimpleExample = Template.bind({});
ModalDSSimpleExample.args = {
    titleHeader: "Title Header",
    title: "Title",
    content: "Replace this instance by Seazon component",
    labelButton: "Label",
    onClick: fn(),
    onEdit: fn()
};
