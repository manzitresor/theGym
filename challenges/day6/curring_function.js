function multiplyAll(arr) {
    return function(num) {
      return arr.map((item) => {
        return item * num
      })
      }
  }

  multiplyAll ([1,2,3]) //(2)