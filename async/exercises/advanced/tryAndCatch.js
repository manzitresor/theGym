async function fetchMultipleData() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/4');
        if(!response1.ok) {
            console.log('Response not Ok')
        }
        const posts1 = await response1.json();
        console.log(posts1);
        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/5343');
        if(!response2.ok) {
            console.log('Response not  on data 2 Ok');
        }
        const posts2 = await response2.json();
        console.log(posts2); 
    } catch (error) {
        console.log('Failed to fetch API.');
    }
}

fetchMultipleData();