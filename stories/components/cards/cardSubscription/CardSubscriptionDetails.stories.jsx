import CardSubscriptionDetailsComponent from '../../../../components/cards/cardSubscription/CardSubscriptionDetails';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/cards/CardSubscription',
    component: CardSubscriptionDetailsComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};
export default meta;

export const CardSubscriptionDetails = {
    args: {
        type: 'Default',
        detailsLabel: 'Title',
        numberOfDishes: 12,
        price: '00,00', 
        link: '',
    },
};

CardSubscriptionDetails.storyName = 'Card Subscription Details';