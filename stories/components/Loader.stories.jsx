import React from 'react';
import { fn } from '@storybook/test';
import Loader from '../../components/loader/Loader';


const meta = {
  title: 'New design system/components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const LoaderExample = {
  args: {

  },
};
LoaderExample.storyName = 'Loader example';