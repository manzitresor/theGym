function createAlarm(name,delay) {
    return new Promise((resolve,reject) => {
        let delayMs = delay * 1000;
        if(delay > 2) {
            setTimeout(()=>resolve(`Wake up ${name}`),delayMs )
            
        } else {
           reject(`Delay is not sufficient`);
        }
    })
}


// Example

// output "Wake up John" after 4 seconds
createAlarm('John', 4).then((message) => {
    console.log(message) 
}).catch((error) => {
    console.error(error)
})


// output "Delay is not sufficient"

createAlarm('John', 1).then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error) 
})