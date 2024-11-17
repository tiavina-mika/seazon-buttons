import React from 'react';
import XComIcon from '../../../components/icons/XCom';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/Icons/XCom',
  component: XComIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const XCom = {
   args: {
    size: 'md',
    color: '#435B67',
    disabled: false,
  },
};
XCom.storyName = 'XCom'