function sumArray(array) {
    if(array == null || ( array.length >= 0 && array.length <= 2)) return 0;
    const lowestHighest = array.sort((a,b) => a - b);
    const newArray= lowestHighest.slice(1,-1);
    return newArray.reduce((acc,occ) => acc + occ,0)
  }