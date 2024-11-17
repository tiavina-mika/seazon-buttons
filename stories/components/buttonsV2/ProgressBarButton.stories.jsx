import React from 'react';
import ProgressBarButton from '../../../components/buttons/progressBar/ProgressBarButton';
import { fn } from '@storybook/test';
import { disabled } from '../../../components/mealsGrid/mealForGrid/MealControlButton.css';

const meta = {
  title: 'New design system/components/buttons/ProgressBar',
  component: ProgressBarButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ProgressBar = {
  args: {
    text: 'Label',
    value: 45,
    loading: false,
    onClick: fn(),
    disabled: false
  },
};

