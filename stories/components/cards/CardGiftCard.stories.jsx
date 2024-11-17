import React from "react";
import CardGiftCard from "../../../components/cards/cardGiftCard/CardGiftCard";


const meta = {
  title: "New design system/components/cards",
  component: CardGiftCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardGiftCardExample = {
  args: {
    image: "/pictures/gift-card.svg",
    alt: "image",
    select: false,
    numberOfPlats: "X",
    price: "43.9",
  },
};
CardGiftCardExample.storyName = 'CardGiftCard';