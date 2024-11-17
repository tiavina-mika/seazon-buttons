import React from 'react';
import PaymentMethodItem from '../../../containers/foodcheri/payments/PaymentMethodItem';
import { SERVICES } from '../../../utils';
import { PAYMENT_METHODS, PAYMENT_PROVIDERS } from '../../../utils/payments';

const notes = `
  ## PaymentMethodItem

  used to display user selected payment method
`;

export default {
  title: 'Foodcheri/Payments/PaymentMethodItem',
  parameters: {
    notes
  },
  component: PaymentMethodItem
};

const Template = (args) => {
  return <PaymentMethodItem {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  service: SERVICES.foodcheri,
  paymentMethod: {
    provider: PAYMENT_PROVIDERS.stripe,
    type: PAYMENT_METHODS.card
  }
}

export const VisaCard = Template.bind({});
VisaCard.args = {
  service: SERVICES.foodcheri,
  paymentMethod: {
    provider: PAYMENT_PROVIDERS.stripe,
    type: PAYMENT_METHODS.card,
    brand: 'visa'
  }
}

export const AmexCard = Template.bind({});
AmexCard.args = {
  service: SERVICES.foodcheri,
  paymentMethod: {
    provider: PAYMENT_PROVIDERS.stripe,
    type: PAYMENT_METHODS.card,
    brand: 'amex'
  }
}

export const Mastercard = Template.bind({});
Mastercard.args = {
  service: SERVICES.foodcheri,
  paymentMethod: {
    provider: PAYMENT_PROVIDERS.stripe,
    type: PAYMENT_METHODS.card,
    brand: 'mastercard'
  }
}