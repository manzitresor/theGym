var promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
    resolve();
  });

  function displayResorve() {
    console.log("Resolved");
  }

  promise.then(setTimeout(displayResorve,1000))