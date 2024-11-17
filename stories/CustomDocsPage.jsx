import React from 'react';
import PropTypes from 'prop-types';
import { ArgsTable, Description, Subtitle, Title, Stories } from '@storybook/addon-docs';

/**
 * it's a custom docs page that we see on Docs tab
 * generally used for components with modal that we do not want to display into Docs tab
 */
const CustomDocsPage = props => {
	const { notes, withStories = false } = props;

	return (
		<>
			<Title />
			<Subtitle />
			<Description>{notes}</Description>
			<ArgsTable />
			{ withStories && <Stories /> }
		</>
	);
}

CustomDocsPage.propTypes = {
	notes: PropTypes.string,
	withStories: PropTypes.bool
}
export default CustomDocsPage;