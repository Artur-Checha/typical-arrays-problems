
exports.min = function min (array) {
	return ((array === undefined) || (array.length === 0)) ? 0 : Math.min.apply(0, array);
}

exports.max = function max (array) {
	return ((array === undefined) || (array.length === 0)) ? 0 : Math.max.apply(0, array);
}

exports.avg = function avg (array) {
	if ((array === undefined) || (array.length === 0))
	return 0;
	else {
	let body = 0;
	for (let i = 0; i < array.length; i++) {
	body += array[i];
	}
	return body / array.length;
	}
}