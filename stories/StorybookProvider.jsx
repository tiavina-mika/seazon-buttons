import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from './store';
//import { StripeProvider } from 'react-stripe-elements';

const StorybookProvider = ({ children }) => {
	/*const stripeApiKey = window.PRODUCTION ? 'pk_live_N4itKcAinmluReCJ55o7v6dX' : 'pk_test_I16fZMEywZyklzlO7nkXmV79';

	const content = withStripe ?
		<StripeProvider apiKey={stripeApiKey}>
			{children}
		</StripeProvider>
		: children;*/

	return (
		<HelmetProvider>
			<Provider	store={store}>
				{ children }
			</Provider>
		</HelmetProvider>
	);
};

export default StorybookProvider;