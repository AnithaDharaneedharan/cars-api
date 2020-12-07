const uniqid = require('uniqid');

const generate = () => {
	return uniqid();
}

module.exports = {
	generate
}
