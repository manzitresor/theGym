function fetchData(url,retries) {
    return new Promise((resolve,reject)=> {
        const attemptFetch = function(attempt){
            fetch(url)
                .then((response => response.json()))
                .then(data => resolve(data))
                .catch(error=>{
                    if(attempt < retries) {
                        attemptFetch(attempt + 1)
                        console.log(`Failed on the ${attempt+1} attempt`)
                    } else {
                        resolve('Failed to fetch');
                    }
                })
        }
        attemptFetch(0);
    });  
}

fetchData('ghhttps://jsonplaceholder.typicode.com/posts/4',3)
.then((data) => console.log(`Fetched data ${data}`))
.catch(error => console.log(error));



