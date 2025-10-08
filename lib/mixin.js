const mixin = (baseClass, ...mixins) =>
	mixins.reduce((parentClass, mixinClass) => mixinClass(parentClass), baseClass);

const describeInstance = (x) => `[an instance of ${x.name}]`;
// Checks if mixin class x is properly mixed with an instance of y.
// If only one argument is given, it is assumed to be the mixin class itself
// and no checks are performed.
const mixable = (y, x) =>
	// eslint-disable-next-line no-multi-spaces
	(!x
		? y
		: (_) => {
				if (new _() instanceof y) {
					return x(_);
				}
				throw new Error(`${x} can only be mixed with a ${describeInstance(y)}`);
		  });

// This allows for both a destructuring style require and an assignment to the
// main function (if that's all you need):
mixin.mixin = mixin;
mixin.mixable = mixable;

module.exports = mixin;
