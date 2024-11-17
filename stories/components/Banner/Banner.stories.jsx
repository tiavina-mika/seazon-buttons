import React from "react";
import { fn } from "@storybook/test";
import Banner from "../../../components/banner/Banner";

const meta = {
  title: "New design system/components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const BannerExample = {
  args: {
    type: "Information",
    typeOfBanner: "Simple",
    textRegular: "Text regular.",
    textMedium: "Medium text",
    textLabel: "Label",
    textLoyalty: "Text loyalty",
    loyaltyCount: 0,
  },
};
BannerExample.storyName = "Banner example";