import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import SearchField from "../../../../components/fields/SearchField";
import { rowItem } from "../../../../components/fields/fields.css";

const SearchTest = ({ disabled = false, error = '' }) => {

	const _onSearch = () => {

	};


	return (
		<div className={rowItem}>
			<SearchField
				onSearch={_onSearch}
				name="search"
				disabled={disabled}
				error={error}
			/>
		</div>
	);
};

SearchTest.propTypes = {
	disabled: PropTypes.bool,
	error: PropTypes.string
};

export default SearchTest;