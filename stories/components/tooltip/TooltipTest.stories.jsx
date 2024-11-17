import React from "react";
import TooltipPopperTest from "../../../components/tooltip/test/TooltipPopperTest";

const meta = {
  title: 'New design system/components/Tooltip',
  component: TooltipPopperTest,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const TooltipTestExample = {
  args: {
    placement: "Top",
    title: "Title",
    text: "Description which must fit on 2 lines maximum",
    withButton: true,
    buttonLabel: "Label",
  },
};

TooltipTestExample.storyName = 'TooltipTest';