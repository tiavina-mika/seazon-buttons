import React from 'react';
import ConnectionButton from '../../../components/buttons/connection/ConnectionButton';

const meta = {
  title: 'New design system/components/buttons/Connection',
  component: ConnectionButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Button = {
  args: {
    loading: false,
    disabled: false,
  },
};
Button.storyName = 'Connection';

