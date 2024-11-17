import TagSportComponent from '../../../components/tags/TagSport';
import React from "react";
import Run from "../../../components/icons/Run";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/Tags/TagSport',
    component: TagSportComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};

export default meta;

export const TagSport = {
    args: {
        label: 'Label',
        icon: <Run size="sm" />,
        selected: false
    },
};
TagSport.storyName = 'Sport';
