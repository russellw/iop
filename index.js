'use strict'
var util = require('util')

function print(a) {
	console.log(util.inspect(a, {
		colors: process.stdout.isTTY,
		depth: null,
		maxArrayLength: null,
		showHidden: false,
	}))
}
