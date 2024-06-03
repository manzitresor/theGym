function pivotLongToWide(longData,keys) {
    const wideData = {};

    keys.forEach(key => {
        wideData[key] = []
    });

    longData.forEach( item => {
    keys.forEach(key => {
        wideData[key].push(item[key])
    })
    })
    return wideData
}


const longFormatData = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];

const wideFormatData = pivotLongToWide(longFormatData, keys);
console.log(wideFormatData);