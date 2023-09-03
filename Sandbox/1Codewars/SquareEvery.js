function squareDigits(num) {
	str = num.toString()
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		newStr += str[i] * str[i]
	}
	let newNum = Number(newStr)
	return newNum
}
