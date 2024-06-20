function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((occ,curr)=> {
     return occ += curr;
  })/ classPoints.length;
  return yourPoints > average
}

betterThanAverage([2, 3], 5) //should return True"