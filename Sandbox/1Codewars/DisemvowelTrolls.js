function disemvowel(str) {
	for (i = 0; i < str.length; i++)
		if (
			str[i] === 'a' ||
			str[i] === 'e' ||
			str[i] === 'i' ||
			str[i] === 'o' ||
			str[i] === 'u'
		) {
			str[i] = str[i + 1]
		}
	console.log(str)
}
