import React from 'react';
import SelectablePaymentMethods from '../../../containers/foodcheri/payments/SelectablePaymentMethods';
import { SERVICES } from '../../../utils';


const notes = `
  ## SelectablePaymentMethods

  used to display selectable payment methods
`;

export default {
  title: 'Foodcheri/Payments/SelectablePaymentMethods',
  parameters: {
    notes
  },
  component: SelectablePaymentMethods
};

const Template = (args) => {
  return <SelectablePaymentMethods {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  service: SERVICES.foodcheri,
  onSelect: (paymentMethod) => console.log(paymentMethod),
  userPaymentMethods: [
    {
      type: 'paypal'
    }
  ]
}