import React from "react";
import CardLine from "../../../components/cards/cardLine/CardLine";


const meta = {
  title: "New design system/components/cards",
  component: CardLine,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardLineExample = {
  args: {
    withIcon: false,
    text: "Text"
  },
};
CardLineExample.storyName = 'CardLine';