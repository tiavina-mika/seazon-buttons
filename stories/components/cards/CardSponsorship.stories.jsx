import CardSponsorshipComponent from '../../../components/cards/cardSponsorship/CardSponsorship';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'New design system/components/cards/CardSponsorship',
    component: CardSponsorshipComponent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
};
export default meta;

export const CardSponsorship = {
    args: {
        type: 'Default',
        titleSponsors: 'Title',
        titleGain: 'Title',
        initialSponsors: 0,
        maxSponsors: 3,
        valueGain: 0,
        link: '',
    },
};

CardSponsorship.storyName = 'Card sponsorship';