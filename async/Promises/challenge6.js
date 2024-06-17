var secondPromise = new Promise((resolve,reject)=> {
    resolve('Second!')
});
var firstPromise = new Promise((resolve,reject) => {
    resolve(secondPromise)
});


firstPromise.then((value) => console.log('Hello',value));