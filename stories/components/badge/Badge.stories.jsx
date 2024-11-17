import React from "react";
import Badge from "../../../components/badge/Badge";

const meta = {
  title: 'New design system/components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const BadgeExample = {
  args: {
    text: 'MD',
  }
};

BadgeExample.storyName = 'Badge';