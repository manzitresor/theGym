function fetchData(url,retries) {
    return new Promise((resolve,reject)=> {
        const attemptFetch = function(){
            fetch(url)
                .then((response => response.json()))
                .then(data => resolve(data))
                .catch(error=>{
                    
                })
        }
        attemptFetch(0);
    });  
}

fetchData('https://jsonplaceholder.typicode.com/posts/4',3)
.then((data) => console.log(`Fetched data ${data}`))
.catch(error => console.log(error));



