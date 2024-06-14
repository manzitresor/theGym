function reverseWords(str) {
  
  return str.split(' ').map((item) => Array.from(item).reverse().join('')).join(' ')
//   let result = [];
//   let splitedStr = str.split(' ') 
//   for(let x of splitedStr) {
//   result.push(Array.from(x).reverse().join(''))
//   }
//   return result.join(' ');
}

reverseWords('apple')