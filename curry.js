function curry(nb_arg, func) {
	return function recurse() {
        var args = [...arguments];
        if (args.length >= nb_arg) {
			return func.apply(null, args);
		}
		return recurse.bind(null, ...args);
	};
}

module.exports = curry;
