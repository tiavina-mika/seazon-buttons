import React from 'react';
import { fn } from '@storybook/test';
import DialogComponent from '../../components/dialog/Dialog';
import { priceValue } from '../../components/dialog/dialog.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Dialog',
  component: DialogComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DialogDropDown = {
  args: {
    isOpen: true,
    configuration: 'dropdown',
    title: 'Headline',
    description: 'Description',
    platform: 'desktop',
    inputDropdownOptions: {
      options1: {
        options: [
          { label: "Select", value: "select 1", description: "description 1" },
          { label: "Select", value: "select 2", description: "description 2" },
          { label: "Select", value: "select 3", description: "description 3" },
        ],
        label: 'Label'
      },
      options2: {
        options: [
          { label: "Select", value: "select 1", description: "description 1" },
          { label: "Select", value: "select 2", description: "description 2" },
          { label: "Select", value: "select 3", description: "description 3" },
        ],
        label: 'Label'
      },
      options3: {
        options: [
          { label: "Select", value: "select 1", description: "description 1" },
          { label: "Select", value: "select 2", description: "description 2" },
          { label: "Select", value: "select 3", description: "description 3" },
        ],
        label: 'Label'
      },
    },
    confirmButtonLabel: 'Label',
    onConfirm: fn(() => {}),
    onCancel: fn(() => {})
  },
};

DialogDropDown.storyName = 'Back and dropdown';

export const DialogSearch = {
  args: {
    isOpen: true,
    configuration: 'search',
    title: 'Headline',
    description: 'Description',
    platform: 'desktop',
    confirmButtonLabel: 'Label',
    onConfirm: fn(() => {}),
    onCancel: fn(() => {})
  },
};

DialogSearch.storyName = 'Back and search';

export const DialogText = {
  args: {
    isOpen: true,
    configuration: 'text',
    title: 'Headline',
    description: 'Description',
    platform: 'desktop',
    confirmButtonLabel: 'Label',
    cancelButtonLabel: 'Label',
    onConfirm: fn(() => {}),
    onCancel: fn(() => {})
  },
};

DialogText.storyName = 'Close and text';

export const DialogImage = {
  args: {
    isOpen: true,
    configuration: 'image',
    imageSrc:"/pictures/dialog/no-image.svg",
    title: 'Headline',
    description: 'Description',
    platform: 'desktop',
    confirmButtonLabel: 'Label',
    cancelButtonLabel: 'Label',
    onConfirm: fn(() => {}),
    onCancel: fn(() => {})
  },
};

DialogImage.storyName = 'Close and image';

export const DialogPrices = {
  args: {
    isOpen: true,
    configuration: 'price',
    title: 'Headline',
    description: 'Description',
    platform: 'desktop',
    prices: [
      {
        priceLabel: 'label',
        discountedPriceValue: 0.00,
        priceValue: 0.00
      },
      {
        priceLabel: 'label',
        discountedPriceValue: 0.00,
        priceValue: 0.00,
        endLine: true
      }
    ]
  },
};

DialogPrices.storyName = 'Close and price';

export const DialogScore = {
  args: {
    isOpen: true,
    configuration: 'score',
    title: 'Title',
    platform: 'desktop',
    confirmButtonLabel: 'Button',
    scoreLabels: {
      score1: 'Label',
      score2: 'Label',
      score3: 'Label',
      comment: 'Label'
    },
    scoreItems: [
      {
        id: 'item1',
        title: 'Title',
        image: "/pictures/dialog/no-image-lg.svg",
        values: {
          score1: 0, score2: 0, score3: 0, comment: ''
        }
      }
    ],
  },
};

DialogScore.storyName = 'Close and score';

export const DialogScoreWithHeader = {
  args: {
    isOpen: true,
    configuration: 'score',
    scoreHeader: {
      title: 'Title',
      subtitle: 'title'
    },
    scoreLabels: {
      score1: 'Label',
      score2: 'Label',
      score3: 'Label',
      comment: 'Label'
    },
    scoreItems: [
      {
        id: 'item1',
        title: 'Title',
        image: "/pictures/dialog/no-image-lg.svg",
        values: {
          score1: 0, score2: 0, score3: 0, comment: ''
        }
      },
      {
        id: 'item2',
        title: 'Title',
        image: "/pictures/dialog/no-image-lg.svg",
        values: {
          score1: 0, score2: 0, score3: 0, comment: ''
        }
      },
      {
        id: 'item3',
        title: 'Title',
        image: "/pictures/dialog/no-image-lg.svg",
        values: {
          score1: 0, score2: 0, score3: 0, comment: ''
        }
      }
    ],
    title: 'Title',
    platform: 'desktop',
    confirmButtonLabel: 'Button'
  },
};

DialogScoreWithHeader.storyName = 'Close and score with header';