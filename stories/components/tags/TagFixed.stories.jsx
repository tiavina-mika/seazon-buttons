import React from 'react';
import FixedTagComponent from '../../../components/tags/TagFixed';
import {fn} from '@storybook/test';
import CircleClock from "../../../components/icons/CircleClock";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/Tags/TagFixed',
    component: FixedTagComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FixedTagNoIcons = {
    args: {
        color: 'default',
        label: 'Label',
        disabled: false,
    },
};

FixedTagNoIcons.storyName = 'No icons';

export const FixedTagRightIcon = {
    args: {
        color: 'default',
        onClose: fn(),
        label: 'Label',
        disabled: false,
    },
};
FixedTagRightIcon.storyName = 'Icon right';

export const FixedTagIcons = {
    args: {
        color: 'default',
        onClose: fn(),
        label: 'Label',
        icon: <CircleClock size="sm" />,
        iconDisabled: <CircleClock size="sm" disabled={true} />,
        disabled: false,
    }
};
FixedTagIcons.storyName = 'Icons';

export const FixedLeftIcon = {
    args: {
        color: 'default',
        label: 'Label',
        icon: <CircleClock size="sm" />,
        iconDisabled: <CircleClock size="sm" disabled={true} />,
        disabled: false,
    }
};
FixedLeftIcon.storyName = 'Icon left';
