import React from 'react';
import { action } from '@storybook/addon-actions';
import PageModal from '../../../components/account/PageModal';
import AddFCPayment from '../../../containers/foodcheri/payments/AddFCPayment';
import { SERVICES } from '../../../utils';
import { PAYMENT_METHODS } from '../../../utils/payments';
import StorybookProvider from '../../StorybookProvider';

const notes = `
  ## AddFCPayment

  display payment method form
`;

export default {
  title: 'Foodcheri/Payments/AddFCPayment',
  parameters: {
    notes
  },
  component: AddFCPayment
};

const Template = (args) => {
  return (
    <StorybookProvider withStripe>
      <PageModal
        shutter={{ name: 'addCard', zIndex: 101, title: "Ajouter une carte bancaire" }}
        name="addCard"
        onClose={action("Closed!")}
        content={
          <AddFCPayment storybook {...args} />
        }
      />
    </StorybookProvider>
  )
}

export const Default = Template.bind({});
Default.args = {
  service: SERVICES.foodcheri,
  addCard: (cardToken) => console.log(cardToken),
  selectedPaymentType: PAYMENT_METHODS.card
}