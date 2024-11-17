import React from "react";
import { fn } from "@storybook/test";
import HeaderModale from "../../../components/header/headerModale/HeaderModale";

const meta = {
  title: "New design system/components/header/headerModale",
  component: HeaderModale,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const HeaderModaleExample = {
  args: {
    titleHeader: "Title header",
    withIcon: true,
    onClose: fn(),
  },
};
HeaderModaleExample.storyName = "HeaderModale example";