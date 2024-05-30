const deepEqualArrays = (array1,array2) => JSON.stringify(array1) == JSON.stringify(array2)

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// console.log(deepEqualArrays(array1, array2));
// output: true
