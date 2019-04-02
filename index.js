let arr1 = ['words', 'word', 'written', 'write']
let arrCompound = ['compound word', 'artificial intelligence']
let text = 'Things are often written by people who write words. Artificial intelligence often write compound words'
let textLower = text.toLowerCase()
let textArr = textLower.split(' ')
let usedWords = textArr.filter(word => arr1.includes(word))
let usedCompoundWords = arrCompound.filter(compWord => textLower.includes(compWord))
console.log(usedWords, usedCompoundWords)
