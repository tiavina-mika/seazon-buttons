import React from "react";
import CardWinTime from "../../../components/cards/cardWinTime/CardWinTime";


const meta = {
  title: "New design system/components/cards/CardWinTime",
  component: CardWinTime,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardWinTimeExample = {
  args: {
    title: "Title",
    description : "Description",
    buttonLabel: "Label",
  },
};
CardWinTimeExample.storyName = 'CardWinTime';