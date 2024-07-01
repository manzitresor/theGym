function retryFetch(api,retries = 3) {
    return new Promise((resolve,reject) => {
        const fetchdata = async function(attempt) {
            try{
                const response = await fetch(api);
                if(!response.ok) {
                    console.log(`failed to fetch`)
                }
                const data = await response.json();
                resolve(await data);
            }catch(error) {
                if(attempt < retries) {
                    fetchdata(attempt + 1);
                    console.log(`Failed to fetch for the ${attempt} retry`)
                } else {
                    reject(`Failed to fetch after ${attempt} attempts`)
                }
            }
        }
        fetchdata(1);
    })
}

retryFetch('ddhttps://jsonplaceholder.typicode.com/posts/4')
     .then(value => console.log(value))
     .catch(error => console.log(error))
