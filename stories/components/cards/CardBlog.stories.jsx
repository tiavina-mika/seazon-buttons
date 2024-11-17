import React from "react";
import CardBlog from "../../../components/cards/cardBlog/CardBlog";


const meta = {
  title: "New design system/components/cards",
  component: CardBlog,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardBlogExample = {
  args: {
    image: '/pictures/food-card.svg',
    alt: 'image',
    description: 'description on 2 lines possible for article title description on 2 lines',
    buttonLabel: 'Label',
  },
};
CardBlogExample.storyName = 'CardBlog';