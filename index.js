// Use this to transfer your lists into arrays: https://superuser.com/questions/1324801/how-do-i-convert-an-excel-table-to-a-javascript-array

// Placeholder for array of forbidden words
let arr1 = ['words', 'word', 'written', 'write', "contrac'tion"]
// Placeholder for array of forbidden compound words
let arrCompound = ['compound word', 'artificial intelligence']
// Placeholder for the text of the article you're checking
let text = "Things are often written by people who contrac'tion write words. Artificial intelligence often write compound words"
// Sets the article all to lowercase to properly compare strings
let textLower = text.toLowerCase()
// Splits article into individual words
let textArr = textLower.split(/\s|\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g)
console.log(textArr)
// Returns an array of words that were used and shouldn't have been, comparing the individual words against the array of words to not be used
let usedWords = textArr.filter(word => arr1.includes(word))
// Compares each compound word against the whole article
let usedCompoundWords = arrCompound.filter(compWord => textLower.includes(compWord))
// Returns the two lists of words that shouldn't have been used
console.log(usedWords, usedCompoundWords)
