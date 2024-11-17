import React from "react";
import CardStatusOrderer from "../../../components/cards/cardStatusOrderer/CardStatusOrderer";


const meta = {
  title: "New design system/components/cards",
  component: CardStatusOrderer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardStatusOrdererExample = {
  args: {
    title: "Title",
    primaryText: "Text",
    secondaryText: "Text",
  },
};
CardStatusOrdererExample.storyName = 'CardStatusOrderer';