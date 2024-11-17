import React from 'react';
import NavbarComponent from './test/NavBarTest';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/tabs/NavBar',
  component: NavbarComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    viewport: {
      defaultViewport: 'desktop'
    }	
  }
	
};

export default meta;

export const NavBar = {
	
}
