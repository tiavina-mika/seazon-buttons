import React from 'react';
import TabComponent from '../../../components/tabs/TabItem';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/tabs/Tab',
  component: TabComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
		viewport: (args) => {
			if(args.screen === 'mobile') {
				return {
					defaultViewport: 'iphonex'
				}
			} else {
				return {
					defaultViewport: 'desktop'
				}
			} 
    }	
  },
	argTypes: {
		name: {
			options: ['orders', 'calendar', 'notifications', 'help', 'account'],
			control: { type: 'select'}
		},
		screen: {
			options: ['mobile', 'desktop'],
			control: { type: 'radio'}
		}
	}
};

export default meta;

export const Tab = {
	args: {
		name: 'orders',
		isActive: false,
		screen: "mobile",
		label: ''
	}
}
