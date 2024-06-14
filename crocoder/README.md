## Challenge 1

Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.

## challenge 2

Input a number, double it, increase it by 10, and then multiply by 3.

Each operation should be in a separate Promise and then chained together.

## Challenge 3

Using fetchSimulator simulate fetching data from three different URLs in parallel.

Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.

Use Promise.all to wait for all these Promises to resolve and then process the results.