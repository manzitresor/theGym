function duplicateCount(text){
  let str = text.toLowerCase();
   let count = [];
   for(let i = 0; i < str.length; i++) {
     if(str.substring( i+1 ).includes(str[i])) {
       count.push(str[i]);
     }
   }
   return new Set(count).size;
 }

//  (duplicateCount(""), 0);
//  (duplicateCount("abcde"), 0);
//  (duplicateCount("aabbcde"), 2);
//  (duplicateCount("aabBcde"), 2,"should ignore case");
//  (duplicateCount("Indivisibility"), 1)