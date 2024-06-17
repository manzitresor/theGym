function promiseDelay() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            let resolver = Math.random() > 0.5
            if(resolver) {
                resolve('Hello World');
            }  else {
                reject('Error occurred');
                }
        },2000)
    })
}

promiseDelay()
.then((message) => console.log(message))
.catch((error) =>  console.error(error))