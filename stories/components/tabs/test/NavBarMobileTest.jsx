import React, {useState} from "react";
import PropTypes from "prop-types";

import * as classes from "../../../../components/tabs/tab.css";
import NavBar from "../../../../components/tabs/NavBar";

const HeaderMobileTest = ({screen = "desktop"}) => {
	/**
	 * It's a test component but activeTab must be a global state we will define in reducer etc ...
	 */
	const [activeTab, setActiveTab] = useState("orders");
	const _setActiveTab = (tab) => setActiveTab(tab);

	return (
		<div className={classes.testTabs['mobile']}>
			<NavBar
				onSelectTab={_setActiveTab}
				activeTab={activeTab}
				screen={screen}
			/>
		</div>
	)
}

export default HeaderMobileTest;

HeaderMobileTest.propTypes = {
	screen: PropTypes.string
}