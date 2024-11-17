import React from 'react';
import PaymentMethodOption from '../../../containers/foodcheri/payments/PaymentMethodOption';
import { SERVICES } from '../../../utils';
import { PAYMENT_METHODS, PAYMENT_PROVIDERS } from '../../../utils/payments';

const notes = `
  ## PaymentMethodOption

  Show payment method item with a radio button
`;

export default {
  title: 'Foodcheri/Payments/PaymentMethodOption',
  parameters: {
    notes
  },
  component: PaymentMethodOption
};

const Template = (args) => {
  return (
    <PaymentMethodOption storybook {...args} />
  )
}

export const Default = Template.bind({});
Default.args = {
  service: SERVICES.foodcheri,
  paymentMethod: {
    provider: PAYMENT_PROVIDERS.stripe,
    type: PAYMENT_METHODS.card,
    brand: 'visa',
    exp_month: 12,
    exp_year: 2023,
    last4: '1234'
  },
  onChange: value => console.log(value),
  selected: true
}