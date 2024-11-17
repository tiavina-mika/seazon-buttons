import React from "react";
import CardIconAndLabel from "../../../components/cards/cardIconAndLabel/CardIconAndLabel";


const meta = {
  title: "New design system/components/cards",
  component: CardIconAndLabel,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardIconAndLabelExample = {
  args: {
    type: "seasonal",
    percent: "X",
    labelDescription: "",
  },
};
CardIconAndLabelExample.storyName = 'CardIconAndLabel';