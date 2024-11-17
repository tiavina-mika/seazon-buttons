import React, { useState } from "react";

import * as classes from "../../../../components/tabs/tab.css";
import NavBar from "../../../../components/tabs/NavBar";

const NavBarTest = () => {
	/**
	 * It's a test component but activeTab must be a global state we will define in reducer etc ...
	 */
	const [activeTab, setActiveTab] = useState("orders");
	const _setActiveTab = (tab) => setActiveTab(tab);
	return (
		<div className={classes.testTabs['desktop']}>
			<NavBar
				onSelectTab={_setActiveTab}
				activeTab={activeTab}
			/>
		</div>
	)
}

export default NavBarTest;