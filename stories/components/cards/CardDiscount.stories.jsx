import React from "react";
import CardDiscount from "../../../components/cards/cardDiscount/CardDiscount";


const meta = {
  title: "New design system/components/cards/CardDiscount",
  component: CardDiscount,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardDiscountExample = {
  args: {
    applied: true,
    title: "Title of reduction",
    discountList: ["line with discount applied", "line with discount applied", "line with discount applied", "line with discount applied"],
    buttonLabel: "Label",
  },
};
CardDiscountExample.storyName = 'CardDiscount';