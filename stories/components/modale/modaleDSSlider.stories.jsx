import React from "react";
import StorybookProvider from "../../StorybookProvider";
import ModalDSSlider from "../../../components/modals/modalDSSlider/ModalDSSlider";

const meta = {
  title: "New design system/components/modale/ModaleDSSlider",
  component: ModalDSSlider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dataToSlide: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

const Template = (args) => (
  <StorybookProvider>
    <ModalDSSlider {...args} />
  </StorybookProvider>
);

export const ModalDSSliderExample = Template.bind({});
ModalDSSliderExample.args = {
  titleHeader: "Title of the modal",
  dataToSlide: [
    { id: 1, title: "Title step 1", description: "Description for step 1", imageSrc: null },
    { id: 2, title: "Title step 2", description: "Description for step 2", imageSrc: null },
    { id: 3, title: "Title step 3", description: "Description for step 3", imageSrc: null },
  ],
};
