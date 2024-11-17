import React, { useState } from 'react';

import LeftTab from '../../../../components/tabs/LeftTab';
import RightTab from '../../../../components/tabs/RightTab';

const TabsTest = ({screen = 'mobile'}) => {

	const [activeTab, setActiveTab] = useState("orders");
	const _setActiveTab = (tab) => setActiveTab(tab);
	return (
		<>
			<LeftTab
				onClick={_setActiveTab} 
				activeTab={activeTab} 
				screen={screen}
			/>
			<RightTab
				onClick={_setActiveTab}
				activeTab={activeTab}
				screen={screen}
			/>
		</>
		
	);
};

export default TabsTest;