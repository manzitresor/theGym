var lengthOfSequence = function (arr, n) {
    const indexOne = arr.indexOf(n);
    const indexTwo= arr.lastIndexOf(n);
    if(indexOne === -1 || indexOne === indexTwo) {
       return 0;
    }
    const subArr = arr.slice(indexOne + 1, indexTwo).includes(n)
    return subArr ? 0 : indexTwo - indexOne + 1
  };