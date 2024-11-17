import React, { useState } from 'react';

import SliderField from '../../../../components/fields/SliderField';
import * as classes from '../../../../components/fields/fields.css';

const RangeTest = () => {
	const [range, setRange] = useState(20);

	const _handleChange = (value) => {
		setRange(value);
	}

	return (
		<div className={classes.slideContainer}>
			<SliderField 
				name="range"
				onChange={_handleChange}
				min={0}
				max={120}
				value={range}
				range={false}
			/>
		</div>
	)
}

export default RangeTest;