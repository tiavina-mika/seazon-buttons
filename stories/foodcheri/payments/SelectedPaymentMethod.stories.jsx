import React from 'react';
import SelectedPaymentMethod from '../../../containers/foodcheri/payments/SelectedPaymentMethod';
import { SERVICES } from '../../../utils';
import { PAYMENT_METHODS, PAYMENT_PROVIDERS } from '../../../utils/payments';


const notes = `
  ## SelectedPaymentMethod

  used to display user selected payment method
`;

export default {
  title: 'Foodcheri/Payments/SelectedPaymentMethod',
  parameters: {
    notes
  },
  component: SelectedPaymentMethod
};

const Template = (args) => {
  return <SelectedPaymentMethod {...args} />;
}

export const Default = Template.bind({});
Default.args = {}

export const VisaCard = Template.bind({});
VisaCard.args = {
  selectedPaymentMethods: {
    primary: {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'visa'
    }
  },
  totalAmount: 10,
  service: SERVICES.foodcheri
}

export const Mastercard = Template.bind({});
Mastercard.args = {
  selectedPaymentMethods: {
    primary: {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'mastercard'
    }
  },
  service: SERVICES.foodcheri
}

export const AmexCard = Template.bind({});
AmexCard.args = {
  selectedPaymentMethods: {
    primary: {
      provider: PAYMENT_PROVIDERS.stripe,
      type: PAYMENT_METHODS.card,
      brand: 'amex'
    }
  },
  totalAmount: 0,
  service: SERVICES.foodcheri
}