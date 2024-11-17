import { jsonToObject } from './utils';
import { toDateFormatString, toDayOfWeek } from '../utils';

//------------------------------------------------------------------//
//------------------------- BURGER MENU ----------------------------//
//------------------------------------------------------------------//
export const menuLinks = [
	{
		'text' : 'Au Menu',
		'url' : '/menu'
	},
	{
		'text' : 'Nos Offres',
		'url' : '/abonnement'
	},
	{
		'text' : 'Nos engagements',
		'url' : 'https://blog.seazon.fr/index.php/seazon-engagements/'
	},
	{
		'text' : 'Offrir Seazon',
		'url' : '/carte-cadeau',
		'newTab' : false
	},
	{
		'text' : 'Entreprises',
		'url' : 'https://blog.seazon.fr/index.php/business/',
		'newTab' : true
	},
	{
		'text' : 'Recommandations',
		'url' : '/recommandations',
		'newTab' : true
	},
	{
		'text' : 'Blog',
		'url' : 'https://blog.seazon.fr/',
		'newTab' : true
	},
	{
		'text' : 'Aide',
		'url' : 'http://support.seazon.fr/',
		'newTab' : true
	}
];

export const burgerMenu = {
	id: 'TEBvUY55Ok',
	className: 'Content',
	type : 'burgerMenu',
	name : 'Burger Menu',
	state : 'active',
	createdAt : new Date('2019-10-21T16:35:25.764+0000'),
	updatedAt: new Date('2019-10-22T19:11:11.644+0000'),
	menuLinks
}

//------------------------------------------------------------------//
//--------------------------- HOMEPAGE -----------------------------//
//------------------------------------------------------------------//
export const homepage = {
	id : "wSV0cFEPtM",
	type : "homepage4",
	name : "Homepage Sept 2019",
	state : "active",
	createdAt: new Date("2019-08-13T12:13:34.519+0000"),
	updatedAt : new Date("2021-04-27T13:41:02.347+0000"),
	meta : {
		"title" : "Test ABC",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a elit arcu. Praesent sed felis dolor. Duis porta magna mi, et porta metus vestibulum sit amet. Quisque cursus, ligula et porttitor dictum, ligula nibh congue odio, nec mattis felis elit vel mi. Pellentesque a hendrerit nisl, eu lobortis urna.",
		"ogImage" : "fnjuidbjh7w7jvmk8m0p"
	},
	test: true
};

//------------------------------------------------------------------//
//--------------------------- FRIDGE -------------------------------//
//------------------------------------------------------------------//
export const fridgePage = {
	type : "fridgePage",
	name : "LandingPage Frigo",
	state : "active"
};

const mealProps = {
	className: 'Meal',
	type : "plat",
	createdAt: new Date("2019-08-13T12:13:34.519+0000"),
	updatedAt : new Date("2021-04-27T13:41:02.347+0000"),
	getTitle: function () {
		return this.text;
	},
	getSubtitle: function () {
		return this.technicalName || this.name;
	}
};

const mealData = {
	id : "GaiUdwyf0d",
	...mealProps,
	medias: [
		"kfc/a0ryy4i9bvryodqagkjf"
	],
	nutritions: {
		"calories" : 485, 
		"lipids" : 14.8, 
		"saturatedFats" : 7.4, 
		"carbohydrates" : 72.5, 
		"proteins" : 11, 
		"fibers" : 9.7, 
		"sugars" : 4.7, 
		"salts" : 3.2, 
		"carboneScore" : "A", 
		"healthyRate" : "B", 
		"socialNote" : "B", 
		"glycemicLoad" : 39.1,
		"per100": {
			"proteins" : 11,
			"calcium" : 88.6,
			"copper" : 0.32,
			"iron" : 2.25,
			"magnesium" : 129.68,
			"manganese" : 2.35,
			"phosphorus" : 357.68,
			"potassium" : 506.5,
			"selenium" : 40.05,
			"zinc" : 2.11,
			"vitaminD" : 0.16,
			"vitaminC" : 11.18,
			"vitaminA" : 49.26,
			"omega6" : 1.19,
			"omega3" : 0.09
		}
	},
	grams: 430,
	text: "Blanquette de légumes rôtis & riz rouge bio",
	technicalTitle: "Chloé Charles : Blanquette de légumes rôtis & riz rouge bio",
	averageStars : 5,
	totalOpinionsCount : 1
};
export const meal = jsonToObject(mealData);

export const defaultMeals = [
	mealData,
	{
		id : "HJEedFCuzl",
		...mealProps,
		nutritions : {
			"calories" : 417,
			"proteins" : 34,
			"carboneScore" : "C",
			"glycemicLoad" : 27.4,
		},
		text : "Boeuf snacké, sauce au sésame",
		technicalTitle : "Boeuf snacké, sauce au sésame v. juin-sept- 1796",
		medias : [
			"kfc/vmwrzdbc8bnaublmkvqn"
		],
		averageStars : 9.33,
		totalOpinionsCount : 2,
		type : "plat",
		"detailTags" : ["equilibre"]
	},
	{
		id : "Ls3T42DTVV",
		...mealProps,
		medias : [
			"kfc/jlez1fhkcuwexgmhyhim"
		],
		nutritions : {
			"calories" : 589,
			"proteins" : 40,
			"carboneScore" : "B",
			"glycemicLoad" : 11.6,
		},
		text : "Bowl dinde marinée, quinoa & haricots rouges",
		technicalTitle : "Bowl dinde marinée, quinoa & haricots rouges - 10113",
		type : "plat"
	},
	{
		id : "ZFU6S5BnZb",
		...mealProps,
		medias : [
			"kfc/ygdics8xayevcu99846e"
		],
		nutritions : {
			"calories" : 496,
			"proteins" : 25,
			"carboneScore" : "C",
			"glycemicLoad" : 23.1,
		},
		text : "Boulettes au boeuf sauce miel & sriracha, riz & petits pois",
		technicalTitle : "Boulettes au boeuf sauce miel & sriracha, riz & petits pois - 8099",
		type : "plat"
	},
	{
		id : "ps5uYe7UgC",
		...mealProps,
		nutritions : {
			"calories" : 416,
			"proteins" : 17,
			"carboneScore" : "B",
			"glycemicLoad" : 4,
		},
		text : "Avoine aux épinards & chou-fleur, oeuf poché",
		technicalTitle : "Avoine aux épinards & chou-fleur, oeuf poché - 4462",
		medias : [
			"kfc/kyrgmmap6ipjv6d8iou0"
		],
		averageStars : 13.33,
		totalOpinionsCount : 3,
		type : "plat",
		addonPrice: 10
	},
	{
		id : "zPy8JQ50y1",
		...mealProps,
		medias : [
			"kfc/jsce47z4qda2xwzdynlm"
		],
		nutritions : {
			"calories" : 498,
			"lipids" : 25.2,
			"saturatedFats" : 5.4,
			"carbohydrates" : 40.2,
			"proteins" : 23
		},
		text : "Aiguillettes végétales, nouilles udon, légumes sautés & sauce hoisin",
		technicalTitle : "Aiguillettes végétales, nouilles udon, légumes sautés & sauce hoisin - 9719",
		type : "plat",
		averageStars : 5,
		totalOpinionsCount : 1
	},
	{
		id : "KGOddhdiHr",
		...mealProps,
		medias: [	"kfc/nisg3pkrtek0nm5lzzy6" ],
		text: "hey",
		technicalTitle : "Test Benoit 09/08/2021",
		type : "meal-prep"
	},
	{
		id : "NYFg79yBE0",
		...mealProps,
		medias : [ "kfc/qf2dkal1lwejbqxoadrb"	],
		nutritions : {
			"calories" : 89,
			"lipids" : 1.6,
			"saturatedFats" : 0.2,
			"carbohydrates" : 12.4,
			"proteins" : 4,
			"fibers" : 5.3,
			"sugars" : 11.7,
			"salts" : 1.9,
			"carboneScore" : "A",
			"healthyRate" : "B",
			"socialNote" : "C",
			"glycemicLoad" : 4.3,
			"per100" : {
				"proteins" : 3.3,
				"calcium" : 25.65,
				"copper" : 0.13,
				"iron" : 0.92,
				"magnesium" : 23.14,
				"manganese" : 0.24,
				"phosphorus" : 63.21,
				"potassium" : 585.57,
				"selenium" : 0.05,
				"zinc" : 0.43,
				"vitaminC" : 34.43,
				"vitaminA" : 144.94
			}
		},
		text : "Meal prep : Tomates cerise rôties",
		technicalTitle : "Meal prep : Tomates cerise rôties",
		type : "meal-prep"
	}
];
export const mealsForSlider = defaultMeals.map(item => jsonToObject(item));

const shippingDayData = {
	state: 'active',
	dayOfWeek: toDayOfWeek(new Date()),
	date: toDateFormatString(),
	menu: mealsForSlider.map((meal, index) => ({
		meal, stock: 10 + index, initialStock: 20 + index
	}))
}
export const shippingDay = jsonToObject(shippingDayData);

const orderData = {
	state: 'active',
	shippingDay,
	shippingDate: toDateFormatString(),
	count: 4,
	meals: [{meal, count: 4}],
	plan: jsonToObject({
		state: 'active',
		size: 4
	})
}
export const order = jsonToObject(orderData);

const planOffersData = [
	{	id: 'planOffer1',	price: 20, size: 2 },
	{	id: 'planOffer2',	price: 39.90, size: 4 },
	{	id: 'planOffer3',	price: 49.90, size: 6 },
];
export const planOffers = planOffersData.map(item => jsonToObject(item));

export const marketingTagsData = [
	{
		id : "JhjYDsBMeF",
		colors : { text : "#07393E", background : "#F8F8F8"	},
		text : "Nouveau",
		name : "nouveau",
		type: 'new'
	},
	{
		id : "lrd92uA3rR",
		colors : { text : "#07393E", background : "#1FA086"	},
		rules : { menu : true, mealplanner : true, orderDetail : false },
		text : "Tag trop bien",
		name : "tag-trop-bien"
	},
	{
		id : "skacxDgMdQ",
		colors : { text : "#F8F8F8", background : "#07393E"	},
		rules : { menu : true, mealplanner : true, orderDetail : true },
		text : "Frichti Week",
		name : "frichti-week",
	}
]
export const marketingTags = marketingTagsData.map(item => jsonToObject(item));

const adInsertData = {
	id: 'ZaSuj7KDtw',
	imageId: {
		desktop: 'hts4oozdaw8ama6ahmgp',
		mobile:'uvcheaebq4fmrx3izk4g'
	},
	name: 'Test',
	state: 'active',
	displayDate: { start: '2019-07-21',	end: '2029-07-27' },
	displayPage: [ 'clientMealPlanner', 'prospectMealPlanner', 'menuPage' ]
};
export const adInsert = jsonToObject(adInsertData);

const tagDefaultProps = {
	"titleVisible": true,
	"active": true,
	"backgroundImageWidth": 150,
	"backgroundImageHeight": 80
};
export const tagFilters = [
	{
		...tagDefaultProps,
		"name": "mise-en-avant",
		"title": "Mise en avant",
		"titleColor": "#07393E",
		"backgroundImage": "cyvwavcnh1zsw7tbpnch",
		"marketingTags": ["nouveau","fitness-low-calorie"],
		"viewIndex": 0
	}, {
		...tagDefaultProps,
		"name": "pour-vous",
		"title": "Pour moi",
		"titleColor": "#07393E",
		"backgroundImage": "qztuwfgfstdlphumo6nv",
		"viewIndex": 1
	}, {
		...tagDefaultProps,
		"name":"vegetarien",
		"title":"Végétarien",
		"titleColor":"#07393E",
		"backgroundImage":"eta386ld5lmul4yflokp",
		"viewIndex":2
	},
	{
		...tagDefaultProps,
		"name":"nouveau",
		"title":"Nouveau",
		"titleColor":"#000000",
		"backgroundImage":"ginveqspyzcmthzcrzor",
		"viewIndex":3
	},
	{
		...tagDefaultProps,
		"name":"athletics",
		"title":"Athletics",
		"titleColor":"#FFFFFF",
		"backgroundImage":"rtu0wfd6lh8nndnedtkp",
		"viewIndex":4
	},
	{
		...tagDefaultProps,
		"name": "coup-de-coeur",
		"title":"Coup de coeur",
		"titleColor":"#07393E",
		"backgroundImage":"yvyodqxqj1u4b6isomk4",
		"viewIndex":5
	}
];

const mealPlannerData = {
	id : "eCujhuiwOC",
	tagFilters,
	sections : [
		{
			"name" : "plats",
			"title" : "Nos plats incroyables",
			"subTitle" : "Fraichement cuisinés par nos chefs",
			"types" : [
				"plat",
				"aucun"
			],
			"viewIndex" : 0,
			"hasAdInsert" : true
		},
		{
			"name" : "meal-prep",
			"title" : "Meal Prep trop fresh",
			"subTitle" : "Des recettes simples pour booster vos repas",
			"types" : [
				"meal-prep"
			],
			"viewIndex" : 1,
			"hasAdInsert" : false
		},
		{
			"types" : [
				"dessert", 'yaourt'
			],
			"title" : "Desserts",
			"subTitle" : "Nos desserts en petit déjeuner",
			"name" : "desserts"
		},
	]
};
export const mealPlanner = jsonToObject(mealPlannerData);

//------------------------------------------------------------------//
//--------------------------- ACCOUNT ------------------------------//
//------------------------------------------------------------------//
export const couponData = {
	id: 'couponId',
	code: "couponCode",
	state: "active",
	category: "GIFT",
	useStartDate: "2021-04-28",
	addStartDate: "2021-04-28",
	createdAt: new Date(),
	updatedAt: new Date(),
	addEndDate: "2021-11-30",
	useEndDate: "2021-11-30",
	stages: [
		{
			type: "currency",
			value: "5",
			count: 1
		}
	],
	validity: {
		type: 'allClient'
	},
	uses: { count: 10 },
};

export const coupon = jsonToObject(couponData);
export const coupons = [coupon];

const enterpriseData = {
	name: 'La Maison du Chocolat',
	createdAt: new Date(),
	launchedAt: new Date(),
	id: 'UqracbmLhL',
	totalUsersCount: '500',
    contactMail: "john.do@email.test",
    contactName: "John Do",
    contactPhone: " 00 00 00 00 00",
    contactSeazon: "johndo@foodcheri.com",
	internalTypology: 'medium',
    imageId: 'mnybtvspe3nhlvssjcxp',
	deleted: false
};
export const enterprise = jsonToObject(enterpriseData);

const structureData = {
	name: 'La Maison du Chocolat Retail',
	id: 'qru41Ysyh9',
    billingAddress: { address: "110 avenue de la République", zipCode: "75011", city: "Paris" },
    contactMail: "john.do@email.test",
    contactName: "John Do",
    contactPhone: " 00 00 00 00 00",
    contactSeazon: "johndo@foodcheri.com",
    createdAt: new Date(),
    paymentMethod: "endOfMonth",
    sepa: {},
    enterprise: enterprise,
    stripeId: "",
    updatedAt: new Date()
};

export const structure = jsonToObject(structureData);

const fridgeData = {
	id: 'qru41Ysyh9',
    name: 'Frigo cafeteria',
    address: { 
        address: '225 Rue du Faubourg Saint-Honoré',
        additionalAddress: '4ème étage porte gauche',
        zipCode: '75008',
        city: 'Paris'
    },
    structure: structure,
    isActive: true,
    nuId: 'qrj67Ysyh56'
}
export const fridge = jsonToObject(fridgeData);

const populationData = {
	id: "CWC1HkaS1P",
    populationData: { sales : [{ amount: 3311 }, { amount: 677 }], totalUsersCount: 8},
    contactMail: "john.do@email.test",
    contactName: "John Do",
    contactPhone: " 00 00 00 00 00",
	structure: structure,
    contactSeazon: "johndo@foodcheri.com",
    isVisible: true,
    createdAt: new Date(),
    name: "Générale"
};
export const population = jsonToObject(populationData);

export const userData = {
	id: 'Jjwfl1qHoO',
	firstName: 'Story',
	lastName: 'Book',
	username: "arm44@mail.com",
	closestFridge: fridge,
	population: population,
	structure: structure,
	nuUserId: '867175470673618',
	email: "arm44@mail.com",
	stripeId: "stripe_id",
	createdAt: new Date(),
	updatedAt: new Date(),
	phoneNumber: "07 48 95 14 53",
	zipCode: "75002",
	paymentType: "edenred",
	lastOrderDate: "2021-08-25",
	orderCount: 31,
	totalRevenue: 1060,
	braintreeId: "292941557",
	paygreenCBId: "cp89cf6faedde80e10e7af49f570970320",
	paygreenTRDId: "cp09158f6fec4b8c404702d3caa96de06d",
	lunchrAddedAt: new Date(),
	lunchrId: "19c19c2f-8c27-4006-89c7-a54e09c24633",
	lunchrRefreshToken: "lunchrRefreshToken",
	lunchrToken: "lunchrToken",
	coupons: [
		{
			id: couponData.id,
			code: couponData.code,
			date: "2021-08-20",
			state: "active"
		}
	],
	edenred: {
		refreshToken: "6A374DD8F18E9BE7CE908B272CFD0D60F6E94BC46C4B67FF8837C28E82F4F4AA",
		cardId: "pm_1IYpCaJxfAWuHVTjosyjtPaU",
		username: "petit@yopmail.com"
	},
	addresses: [
		{
			firstName: "Test",
			lastName: "ARM 1",
			zipCode: "75001",
			city: "PARIS 01",
			smsNotification: false,
			shippingHours: "8-13",
			address: "test adresse 1",
			phoneNumber: "07 48 95 14 53",
			id: "fthq8udsr3",
			shipping: "athome"
		},
		{
			firstName: "Test",
			lastName: "ARM 2",
			zipCode: "75002",
			city: "PARIS 02",
			smsNotification: false,
			shippingHours: "8-13",
			address: "test adresse 2",
			additionalAddress: "Complément d'adresse",
			phoneNumber: "07 48 95 14 53",
			id: "fthq8udsr5",
			shipping: "athome"
		}
	],
	billingAddress: "fthq8udsr3",
	fridgeBillingAddress: "fthq8udsr3",
	shippingAddress: "fthq8udsr5",
	getPaymentType: function() {
		return this.get('paymentType') || 'stripe';
	},
	getNewsNotificationInfo: function () {
		return { value: false };
	}
};

export const user = jsonToObject(userData);

export const nfcTags = [
	{
		id: 'XmqPd70CcB',
		nfcTagId: '867175470963617',
		user,
    	name: 'Mon badge 1',
    	createdAt: new Date(),
    	get: function(value) {
    	    return this[value]
    	}
	},
	{
		id: 'XmqPd70CcC',
		nfcTagId: '867175470963627',
		user,
    	name: 'Mon badge 2',
    	createdAt: new Date(),
    	get: function(value) {
    	    return this[value]
    	}
	}
];

const planOfferData = {
	id: 'planOfferId',
	price: 20,
	size: 4,
};

export const planOffer = jsonToObject(planOfferData);

export const planData = {
	id: 'FmiBZJjZzY',
	dayOfWeek: 3,
	zipCode: '75002',
	shippingHours: '8-13',
	user,
	state: 'active',
	planOffer,
};
export const plan = jsonToObject(planData);

const zipCodeEligibilityData = {
	id : "EvDIv8KjpT",
	code : "75002",
	city : "PARIS 02",
	eligibility : true,
	monday : true,
	premiumWeekDay : true,
	premiumWeekNight : true,
	premiumSaturdayDay : true,
	premiumSaturdayNight : true
}
export const zipCodeEligibility = jsonToObject(zipCodeEligibilityData);

export const preferences = {
	allergens: {
		isActive: true,
		value: ['crustace', 'fruit-a-coque', 'gluten']
	},
	glycemicLoad: {
		isActive: true,
		value: 20
	},
	preparation: {
		isActive: true,
		value: 'hot-and-cold'
	},
	calories: {
		isActive: true,
		value: {
			min: 300,
			max: 800
		}
	},
	diet: {
		isActive: true,
		value: 'omnivore'
	},
	spicy: {
		isActive: true,
		value: 'notSpicy'
	},
	excludedIngredients: {
		isActive: true,
		value: [
			{
				kfcId: "hps5O6srCZ",
				name: "carotte",
				text: "Carotte",
				createdAt: new Date(),
				updatedAt: new Date(),
				allergens: [],
				filterable: true,
				objectId: "Z1zMECtfUd"
			}
		]
	}
};

const date = new Date();
export const fridgeOrderData = {
	id: 'FmiBZJjZzY',
	state: 'active',
	createdAt: date,
	user,
	fridge,
	meals: mealsForSlider.map(meal => ({ meal, count: 2, unitPrice: 6.90 })),
	prices: {
		value: 28.50
	}
};

export const fridgeOrder = jsonToObject(fridgeOrderData);
export const fridgeOrders = [
	fridgeOrder,
	jsonToObject({ ...fridgeOrderData, id: 'FmiBZJjZzx', state: 'paid', createdAt: (new Date()).setHours(date.getHours()+1) }),
	jsonToObject({ ...fridgeOrderData, id: 'FmiBZJjZzs', state: 'paymentError', createdAt: (new Date()).setHours(date.getHours()+2) }),
	jsonToObject({ ...fridgeOrderData, id: 'FmiBZJjZzP', state: 'active', createdAt: (new Date()).setMonth(date.getMonth()+1) })
];