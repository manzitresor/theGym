const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};

const fetchSimulator1 = fetchSimulator('https://jsonplaceholder.typicode.com/users',delays[0]);
const fetchSimulator2 = fetchSimulator('https://jsonplaceholder.typicode.com/todos',delays[1]);
const fetchSimulator3 = fetchSimulator('https://jsonplaceholder.typicode.com/posts',delays[2]);

Promise.race([fetchSimulator1,fetchSimulator2,fetchSimulator3]).then((value) => console.log(value));