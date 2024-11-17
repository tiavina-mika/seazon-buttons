import { reducer as formReducer } from 'redux-form';
import reduxCatch from 'redux-catch';
import { thunk } from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import reduxDevToolsComposeEnhancer from '../reduxDevTools';
import appReducers from '../reducers';

import { jsonToObject } from './utils';
import {
	homepage, plan, user,
	meal, mealsForSlider, order,
	zipCodeEligibility, mealPlanner, fridge
} from './defaultArgs';

const reducer = combineReducers({
	...appReducers,
	form: formReducer,
});

const nullMiddleware = store => next => action => {
	if (action == null) {
		return;
	}
	return next(action);
};

// ---- catch error ----//
function errorHandler(error, getState, lastAction) {
	console.error(error);
	console.debug('last action was', lastAction);
}

const store = createStore(reducer,
	{
		app: {
			user,
			shutters: [
				{ name: 'accountInvoices', zIndex: 'zIndex101', title: 'Ma facturation' },
				{ name: 'preferences', zIndex: 'zIndex101', title: 'Mes préférences' },
			],
			fridges: [fridge]
		},
		plans: {
			plan,
			eligibility: zipCodeEligibility
		},
		contents: {
			homepage: jsonToObject(homepage),
		},
		meals: {
			meal,
			meals: mealsForSlider,
			mealsPref: null,
		},
		orders: {
			order,
		},
		fridgeOrders: {
			fridgeOrders: []
		},
		mealPlanner: {
			mealPlanner,
			mealIdsByPreferences: mealsForSlider.map(meal => meal.id),
			mealsPrices: mealsForSlider.map(meal => ({ meal, unitPrice: 6.90 })),
			mealsStocks: mealsForSlider.map(meal => ({ meal, stock: 20 })),
			mealSelections: [{ meal, count: 3 }]
		}
	},
	reduxDevToolsComposeEnhancer(applyMiddleware(reduxCatch(errorHandler), thunk, nullMiddleware)
	));

export default store;