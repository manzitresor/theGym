function myFetch(api) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.open('GET',api)
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }else {
                reject(`Failed to fetch Status: ${xhr.status}`);
            }
        }
        
       xhr.send();
    })
}

// Example usage:
myFetch('https://jsonplaceholder.typicode.com/posts/4')
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
