import React from "react";
import StorybookProvider from "../../StorybookProvider";
import ModalDSBuildingBlock from "../../../components/modals/modalDSBuildingBlock/ModalDSBuildingBlock";

const meta = {
  title: "New design system/components/modale/ModaleDSBuildingBlocks",
  component: ModalDSBuildingBlock,
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
};

export default meta;

const Template = (args) => (
  <StorybookProvider>
    <ModalDSBuildingBlock {...args} />
  </StorybookProvider>
);

export const ModalDSBuildingBlockExample = Template.bind({});
ModalDSBuildingBlockExample.args = {
  titleHeader: "Title of the modal",
  title: "Title",
  description: "Description",
  textLink: "Text and link",
  imageSrc: null
};
