var countSheep = function (num){
    let result = "";
    if(num == 0) return "";
    for(let i = 1; i <=num; i++) {
      result +=`${i} sheep...`
      }
    return result;
  }