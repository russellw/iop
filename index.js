'use strict'
var util = require('util')

function count(a, f) {
	var n = 0
	for (var x of a)
		if (f(x))
			n++
	return n
}

function get(m, key) {
	while (m) {
		if (m.key === key)
			return m.val
		m = m.outer
	}
}

function isalnum(c) {
	return isalpha(c) || isdigit(c)
}

function isalpha(c) {
	return islower(c) || isupper(c)
}

function isdigit(c) {
	return '0' <= c && c <= '9'
}

function islower(c) {
	return 'a' <= c && c <= 'z'
}

function isupper(c) {
	return 'A' <= c && c <= 'Z'
}

function print(a) {
	console.log(util.inspect(a, {
		colors: process.stdout.isTTY,
		depth: null,
		maxArrayLength: null,
		showHidden: false,
	}))
}

function put(m, key, val) {
	return {
		key,
		outer: m,
		val,
	}
}

exports.count = count
exports.get = get
exports.isalnum = isalnum
exports.isalpha = isalpha
exports.isdigit = isdigit
exports.islower = islower
exports.isupper = isupper
exports.print = print
exports.put = put
