import React from "react";
import { fn } from "@storybook/test";
import Notification from "../../../components/notification/Notification";

const meta = {
  title: "New design system/components/Notification",
  component: Notification,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const NotificationExample = {
  args: {
    type: "brand",
    text: "Text",
    delayToClose: 5000,
  },
};
NotificationExample.storyName = "Notification example";