import CardSubscriptionRegistrationComponent from '../../../../components/cards/cardSubscription/CardSubscriptionRegistration';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/cards/CardSubscription',
    component: CardSubscriptionRegistrationComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};
export default meta;

export const CardSubscriptionRegistration = {
    args: {
        isBigCard: false,
        numberOfDishes: 4,
        timeText: 'line with text',
        timeSubtext: 'subtext',
        dateText: 'line with text',
        dateSubtext: 'subtext', 
    },
};

CardSubscriptionRegistration.storyName = 'Card Subscription Registration';