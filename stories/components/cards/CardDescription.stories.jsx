import React from "react";
import CardDescription from "../../../components/cards/cardDescription/CardDescription";


const meta = {
  title: "New design system/components/cards",
  component: CardDescription,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardDescriptionExample = {
  args: {
    image: "/pictures/illustration-card.svg",
    alt: "image",
    title: "Title",
    description: "Description",
  },
};
CardDescriptionExample.storyName = 'CardDescription';