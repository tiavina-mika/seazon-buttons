import CardReferalComponent from '../../../components/cards/cardReferal/CardReferal';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/cards/CardReferal',
  component: CardReferalComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};
export default meta;

export const CardReferal = {
  args: {
    referalCode: 'MARIESEAZONBEST',
    receiveAmount: 20,
    giveAmount: 20,
    image: '/pictures/card-referal-no-image.svg',
    shareAction: fn(() => { })
  },
};

CardReferal.storyName = 'Card Referal';