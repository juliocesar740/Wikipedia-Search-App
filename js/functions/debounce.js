// Returns a function, that, as long as it continues to be  by the input event, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait = 350) => {
	let timeout;

	return (...args) => {

		if (timeout) { clearTimeout(timeout); }

		timeout = setTimeout(() => {

			func.apply(null, args);

		}, wait);

	};
};

export default debounce;