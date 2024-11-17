import React from 'react';
import PaymentMethodChoice from '../../../containers/foodcheri/payments/PaymentMethodChoice';
import { SERVICES } from '../../../utils';
import { PAYMENT_METHODS, PAYMENT_PROVIDERS } from '../../../utils/payments';

const notes = `
  ## PaymentMethodChoice

  Show payment method item with a radio button
`;

export default {
  title: 'Foodcheri/Payments/PaymentMethodChoice',
  parameters: {
    notes
  },
  component: PaymentMethodChoice
};

const Template = (args) => {
  return (
    <PaymentMethodChoice storybook {...args} />
  )
}

export const Default = Template.bind({});
Default.args = {
  service: SERVICES.foodcheri,
  onAddPaymentMethod: () => {
    console.log('Add payment method')
  },
  onValidate: paymentMethod => {
    console.log(paymentMethod);
  },
  paymentMethods: [
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'visa',
      exp_month: 12,
      exp_year: 2023,
      last4: '1234',
      id: 'sdqfdsqfqs'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'fgioupoij'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'hdndfbfdbfg'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'ikikfjghj'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'ujkuykjuj'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'djdtyuyjku'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'jhjgjkuiki'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'zafqvdvdv'
    },
    {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard',
      exp_month: 12,
      exp_year: 2023,
      last4: '3215',
      id: 'tryhdrjh'
    }
  ]
}