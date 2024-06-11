function removeExclamationMarks(s) {
  let result = ""
  for(let x of s) {
    if( x !== "!") {
      result += x
    }
  }
  return result;
}

removeExclamationMarks("Hello World!") //"Hello World"