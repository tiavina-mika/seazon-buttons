import React from 'react';
import NavBarMobileComponent from './test/NavBarMobileTest';
import { mobileParams } from '../../utils';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/tabs/NavBarMobile',
  component: NavBarMobileComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    ...mobileParams
  }
};

export default meta;

export const NavBarMobile = {
  args : {
    screen: 'mobile'
  }
}
