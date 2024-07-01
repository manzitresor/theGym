function exponentialRetries(url,retries = 3,delay = 1000) {
    return new Promise((resolve,reject)=> {
        const fetchData = async function(attempt) {
            try{
                const response = await fetch(url);
                if(!response.ok) {
                    console.log('Failed to fetch');
                } 
                const posts = await response.json();
                resolve(posts);
            }catch(error) {
                if(attempt < retries) {
                    setTimeout(()=> {
                        fetchData(attempt + 1)
                    },delay * 2);
                    console.log(`Retrying....... ${attempt} Attempt`)
                } else {
                    reject(`Failed to fatch after ${attempt} Attempt`)
                }
            }
        }
        fetchData(0);
    })
}


exponentialRetries('ddhttps://jsonplaceholder.typicode.com/posts/4')
     .then(value => console.log(value))
     .catch(error => console.log(error))