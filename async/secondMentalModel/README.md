## QUESTION 1
Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

## QUESTION 3
Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

## QUESTION 4

Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.

## QUESTION 5

Extend the fetchToDo function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.


