var list_items = [
	{'id': 1, 'title': 'I like'},
	{'id': 2, 'title': 'big buttons'},
	{'id': 3, 'title': 'and I'},
	{'id': 4, 'title': 'cannot'},
	{'id': 5, 'title': 'lie'}
];

function clicked(args) {

	console.log(JSON.stringify(args));

}

module.exports = {

	'list_items': list_items,

	'clicked': clicked

};