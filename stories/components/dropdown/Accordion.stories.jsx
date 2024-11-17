import React from "react";
import Accordion from "../../../components/dropdown/accordion/Accordion";

const meta = {
  title: 'New design system/components/Dropdown',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const AccordionExample = {
  args: {
    type: "Line",
    label: "Label",
    accordionData: [
      { text: "Line text", value: "line 1", price: "69.90" },
      { text: "Line text", value: "line 2", price: "3.90" },
      { text: "Line text", value: "line 3", price: "73.80" },
    ],
    textContent: "Text content",
    open: true,
  }
};

AccordionExample.storyName = 'Accordion';