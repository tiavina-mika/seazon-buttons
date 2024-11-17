import TagNumberComponent from '../../../components/tags/TagNumber';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/Tags/TagNumber',
    component: TagNumberComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};

export default meta;

export const TagNumberSmall = {
    args: {
        color: 'secondary',
        label: '2',
        size: 'small'
    },
};
TagNumberSmall.storyName = 'Small';

export const TagNumberMedium = {
    args: {
        color: 'secondary',
        label: '2',
        size: 'medium'
    },
};
TagNumberMedium.storyName = 'Medium';

export const TagNumberLarge = {
    args: {
        color: 'secondary',
        label: '2',
        size: 'large'
    },
};
TagNumberLarge.storyName = 'Large';
