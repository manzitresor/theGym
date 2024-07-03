async function fetchUsersPosts() {
    try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!userResponse.ok) {
            console.log(`Error ${userResponse.status}`);
        }
        const users = await userResponse.json();
        const UserPosts = await users.map(async (user) =>{
            const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            const posts = await postsResponse.json();
            console.log(`User: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log('Posts')
              posts.forEach(post => {
                console.log(`- ${post.title}`)
              })
        });
    } catch (error) {
    }
}

fetchUsersPosts();