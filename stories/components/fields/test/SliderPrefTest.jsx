import React, { useState } from 'react';

import SliderField from '../../../../components/fields/SliderField';
import * as classes from '../../../../components/fields/fields.css';
import Text from '../../../../components/typography/Text';

const SliderPrefTest = () => {
	const [range, setRange] = useState([200, 800]);

	const _handleChange = (values) => {
		setRange(values);
	}

	return (
		<div className={classes.slideContainer}>
			<SliderField 
				name="range"
				onChange={_handleChange}
				min={200}
				max={1200}
				value={range}
				legend="kcal"
				label={<SlideLabel values={range} min={200} max={1200} />}
			/>
		</div>
	)
}

export default SliderPrefTest;

const SlideLabel = ({ values, min, max }) => {
	if (!values) return null;
	const minValue = (values || [])[0] || min;
	const maxValue = (values|| [])[1] || max;
	const label = minValue <= min && maxValue >= max ? 'Sans préférence' : `Entre ${minValue} et ${maxValue} kcal`;
	return <Text variant="medium" scale="body" text={label} />

}