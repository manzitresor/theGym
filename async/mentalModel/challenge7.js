async function fetchUserTodos(apiURL) {
    let apiLinks = apiURL.map(async(api)=> {
         const res = await fetch(api);
         const data = await res.json();
         return data;
    })
    try {
        const values = await Promise.all([apiLinks]);
        const users = await values[0][0];
        const toDos = await values[0][1];
        const combinedData = users.map((user) => {
            return {
                ...user,
                todos: toDos.filter((todo) => todo.id === user.id)
            }
        })

        console.log(combinedData);
        
    } catch {
        return console.log('Failed to fetch');
    }
}

fetchUserTodos([`https://jsonplaceholder.typicode.com/users`,`https://jsonplaceholder.typicode.com/todos`]);
