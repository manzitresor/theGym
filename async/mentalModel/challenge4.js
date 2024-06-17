function myFetch(api) {
    const request = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        request.open('GET',api)
        request.onload = function() {
            if(request.status >= 200 && request.status < 300) {
                resolve(request.responseText);
            }else {
                reject(`Failed to fetch Status: ${request.status}`);
            }
        }
        request.send();
    })
}

// Example usage:
myFetch('https://jsonplaceholder.typicode.com/posts/4')
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
