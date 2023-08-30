function disemvowel(str) {
	let newStr = ''
	for (let i = 0; i < str.length; i++)
		if (
			str[i] !== 'a' &&
			str[i] !== 'e' &&
			str[i] !== 'i' &&
			str[i] !== 'o' &&
			str[i] !== 'u' &&
			str[i] !== 'O' &&
			str[i] !== 'A' &&
			str[i] !== 'E' &&
			str[i] !== 'I' &&
			str[i] !== 'U'
		) {
			newStr += str[i]
		}
	console.log(newStr)
}

disemvowel('This website is for losers LOL!')
