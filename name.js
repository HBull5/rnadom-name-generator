// insert random names here
const names = [
	'goals',
	'self improvement',
	'dreams',
	'teamwork',
	'collaboration',
	'support',
	'fitness',
	'healthy',
	'diet',
	'lifestyle',
	'lavender',
	'purple',
	'physique',
	'freak',
	'extra mile',
	'encouragement'
];

// config object
const config = {
	wordCount: 2,
	numOfResults: 10
};

// generate random names
for (let i = 0; i < config.numOfResults; i++) {
	let output = '';
	for (let j = 0; j < config.wordCount; j++) {
		const rando = Math.floor(Math.random() * names.length);
		for (let k = 0; k < names.length; k++) {
			if (k === rando) {
				if (output === '') {
					output += names[k];
				} else {
					if (names[k] === 'output') {
						output += ` ${names[k - 1 === -0 ? k + 1 : k - 1]}`;
					} else {
						output += ` ${names[k]}`;
					}
				}
			}
		}
	}
	console.log(output);
}
