promise = new Promise(function(resolve, reject) {
    // ADD CODE HERE
    reject
  })
  
  promise.catch(()=> {
    console.log("rejected")
  })