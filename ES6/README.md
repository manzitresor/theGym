## Question I

<p>
Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.
</p>

```sh
const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

// console.log(output);
output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output
```

## Question II

<p>
   Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)
</p>
```sh
    const originalObj = {aa: "1", bf: "3", cq: "5"};
    const reversedObj = reverseObject(originalObj);
    // console.log(reversedObj); 
    output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output
```


## Question III

<p>
   Create a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.
</p>

```sh
const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// console.log(deepEqualArrays(array1, array2));
output: true

```

## Question V

Create a function that performs a pivot operation, on an array of objects, converting it from long to wide format based on specified keys.

```sh 
const longFormatData = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];
// const wideFormatData = pivotLongToWide(longFormatData, keys);
// console.log(wideFormatData);
output: {
  id: [ 1, 2, 3 ],
  name: [ 'Alice', 'Bob', 'Charlie' ]
}
..................................................................................
const longFormatData = [
    { id: 1, lastName: "Dany", age: 30 },
    { id: 2, lastName: "Josue", age: 25 },
    { id: 3, lastName: "Noella", age: 35 }
];
const keys = ["id", "lastName"];
// const wideFormatData = pivotLongToWide(longFormatData, keys);
// console.log(wideFormatData);
output: {
  id: [ 1, 2, 3 ],
  lastName: [ 'Dany', 'Josue', 'Noella' ]
}
```

## Question VI
Create a function that performs a JOIN operation on two arrays of objects, based on a common property, and returns a new array of merged objects.

```sh 
const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];

const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];

//const result = sqlJoin(employees, salaries);
//console.log(result);

output: [
       {id: 1, name: 'John', department: 'IT', salary: 50000},
       {id: 2, name: 'Jane', department: 'HR', salary: 60000}
]
```
