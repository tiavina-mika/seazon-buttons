import React from 'react';
import PaymentsIcons from '../../../components/icons/test/PaymentsIcons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/Payments',
  component: PaymentsIcons,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      options: [
        'Amex',
        'ApplePay',
        'Bimply',
        'CB',
        'Edenred',
        'GooglePay',
        'Mastercard',
        'PassRestaurant',
        'Paypal',
        'Pluxee',
        'Restoflash',
        'Swile',
        'Up',
        'Visa'
      ],
      control: { type: 'select' },
    },
  }
};

export default meta;

export const Payments = {
  args: {
    size: 'md',
    name: 'Amex',
    withBorder: false
  },
};
