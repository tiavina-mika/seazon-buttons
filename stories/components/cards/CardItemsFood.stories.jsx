import React from "react";
import CardItemsFood from "../../../components/cards/cardItemsFood/CardItemsFood";

const meta = {
  title: 'New design system/components/cards',
  component: CardItemsFood,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const CardItemsFoodExample = {
  args: {
    type: 'Mealplanner',
    image: '/pictures/card-items-food-no-image.svg',
    alt: 'image',
    value: 0,
    bookedCount: 2,
    note: 4,
    description: 'Title with the full name of the dishes on a 3-line card on mobile',
    withTag: false,
    nutriScore: 'A',
    ecoScore: 'A',
    unitPrice: '0',
    tagLabel: 'Label',
    outOfStock: false,
    outOfStockText: "Text",
  }
};

CardItemsFoodExample.storyName = 'CardItemsFood';