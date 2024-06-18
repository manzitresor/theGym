function isIsogram(str){
    let word = str.toLowerCase();
    for (let i = 0; i < word.length; i++)
      if (word.substring(i+1).includes(word[i]))
      return false;
    return true;
  }

//   console.log(isIsogram("Dermatoglyphics"), true )
//   isIsogram("isogram"), true
//   isIsogram("aba"), false
//   isIsogram("moOse"), false
//   isIsogram("isIsogram"), false 
//   isIsogram(""), true