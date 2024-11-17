import AlertComponent from '../../../components/alert/Alert';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/Alert',
    component: AlertComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};
export default meta;

export const InformationAlert = {
    args: {
        button: false,
        title: 'Title',
        bodyText: 'Body Text',
        buttonText: 'Voir plus',
        alertType: 'information',
    },
};

InformationAlert.storyName = 'Information Alert';