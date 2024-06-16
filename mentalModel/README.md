## Question 1.


Create a function called createAlarm that generates a wake-up message for a person after a specified time delay. This function should accept two parameters: the person's name and the delay time in seconds.The function should return a promise that resolves with the wake-up message (e.g.Wake up person) but if the delay is less than 2 seconds,the promise should be immediately rejected with an error message stating **Delay is not sufficient**

**Example of how the function should be used**
```sh

createAlarm('John', 4).then((message) => {
    console.log(message) // output "Wake up John" after 4 seconds
}).catch((error) => {
    console.error(error)
})

createAlarm('John', 1).then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error) // output "Delay is not sufficient"
})

```

## Question 2

Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises

### Starting code

```sh 
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
```

## Question 2

Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds.