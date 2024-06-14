function countSheeps(sheep) {
    let count = 0;
    for(let x of sheep) {
      if( x == true && x !== undefined &&  x !== null) {
          count +=1; 
      }
    }
    return count;
  }