import React from 'react';
import TabsComponent from './test/TabsTest';
import { mobileParams } from '../../utils';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/tabs/Tabs',
  component: TabsComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
		...mobileParams
  },
};

export default meta;

export const Tabs = {
}
