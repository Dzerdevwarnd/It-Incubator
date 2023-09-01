function getCount(str) {
	let count = 0
	for (let L = 0; L < str.length; L++) {
		if (
			str[L] === 'a' ||
			str[L] === 'e' ||
			str[L] === 'i' ||
			str[L] === 'o' ||
			str[L] === 'u'
		) {
			count += 1
		}
	}
	return count
}

console.log(getCount('afeyrsv'))
