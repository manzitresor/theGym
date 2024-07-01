const url = 'https://jsonplaceholder.typicode.com/todos/1';
const abortControl = new AbortController();
async function abortFetch() {
    const timer = setTimeout(() => {
        abortControl.abort()
        console.log('Aborted fetch')
    },1000)
    const { signal } = abortControl;
    return fetch(url,{signal})
    .then((res) => res.json)
    .then((value)=> {
        clearTimeout(timer);
        console.log(value);
    })
}

abortFetch();