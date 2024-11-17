/**
 * mobile parameters
 */
export const mobileParams = {
	viewport: {
		defaultViewport: 'iphonex'
	}
}

/**
 * tablet parameters
 */
export const tabletParams = {
	viewport: {
		defaultViewport: 'ipad'
	}
}

/**
 * convert json to similar ParseObject
 * @param jsonObj
 * @returns {Object|null}
 */
export function jsonToObject(jsonObj) {
	if (!jsonObj || typeof jsonObj !== 'object') return null;
	return Object.create({
		...jsonObj,
		get: function(key) {
			return this[key];
		},
		has: function(key) {
			return !!this[key];
		},
		add: function(key, value) {
			return this[key].push(value);
		},
		set: function(key, value) {
			return this[key] = value;
		},
		save: function () {
			return true;
		},
		isCancelled: function () {
			return this.state === 'cancelled';
		}
	});
}

/**
 * get random number between 1 - max
 * @param max
 * @returns {number}
 */
export function getRandom(max = 10) {
	return Math.floor(Math.random() * max);
}

/**
 * Get random string
 *
 * @param {number} length
 * @returns {string}
 */
export function getRandomString(length = 16) {
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
	const charLength = chars.length;
	let result = '';
	for ( let i = 0; i < length; i++ ) {
		result += chars.charAt(Math.floor(Math.random() * charLength));
	}
	return result;
}

export const sizeLabels = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large',
}