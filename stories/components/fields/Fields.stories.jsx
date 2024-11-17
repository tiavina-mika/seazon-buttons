import React from 'react';
import FieldsComponent from './test/TestForm';
import StorybookProvider from '../../StorybookProvider';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/fields/Fields',
  component: FieldsComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    disabled: false,
  }
};

export default meta;

const Template = (args) =>(
	<StorybookProvider >
		<FieldsComponent {...args} />
	</StorybookProvider>
);

export const Fields = Template.bind({});