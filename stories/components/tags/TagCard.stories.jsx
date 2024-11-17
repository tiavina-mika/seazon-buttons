import React from 'react';
import TagCardComponent from '../../../components/tags/TagCard';
import CircleClock from "../../../components/icons/CircleClock";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/Tags/TagCard',
    component: TagCardComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TagCardNoIcons = {
    args: {
        label: 'Label',
        type: 'left',
        disabled: false,
    },
};

TagCardNoIcons.storyName = 'No icons';

export const TagCardIconLeft = {
    args: {
        label: 'Label',
        icon: <CircleClock size="sm" color="#003840" />,
        iconDisabled: <CircleClock size="sm" disabled={true} />,
        type: 'left',
        disabled: false,
    }
};
TagCardIconLeft.storyName = 'Icon left';
