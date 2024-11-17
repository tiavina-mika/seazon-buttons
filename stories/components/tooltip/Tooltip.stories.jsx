import React from "react";
import TooltipTest from "../../../components/tooltip/test/TooltipTest";

const meta = {
  title: 'New design system/components/Tooltip',
  component: TooltipTest,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const TooltipExample = {
  args: {
    placement: "Top",
    title: "Title",
    text: "Description which must fit on 2 lines maximum",
    withButton: true,
    buttonLabel: "Label",
  },
};

TooltipExample.storyName = 'Tooltip';