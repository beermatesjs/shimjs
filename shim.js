/**
	This file is part of ShimJS
*/
(function (window) {
	// Name of our public API as it is available in the browser as a global variable.
	var publicInterface = "shimjs";

	window[publicInterface] = function () {

		var shims = [],
			callback = (arguments[arguments.length] instanceof Function) ?
						arguments[arguments.length] : new Function
		;

		// Build a list of the needed shims
		for (var i = 0; i < argmuments.length; i++) {
			if (typeof arguments[i] === "string") {
				shims.push("libs/" + arguments[i]);
			}
		}

		// Include the JS files and fire the callback when done
		require(shims, callback);
	};
})(this);
