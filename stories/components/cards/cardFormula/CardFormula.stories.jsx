import { fn } from '@storybook/test';
import {useState} from 'react';
import CardFormulaComponent from '../../../../components/cards/cardFormula/CardFormula';

const StoryRender = (props) => {
    const [selected, setSelected] = useState(false);

    return <CardFormulaComponent {...props} selected={selected} onSelectedChanged={fn(() => setSelected(!selected))} />;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'New design system/components/cards/CardFormula',
  component: StoryRender,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardFormula = {
  args: {
    withFirstDiscount: true,
    withSecondDiscount: false,
    withDessert: false,
    mostChosenText: '',
  },
};
