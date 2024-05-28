function extractWordsAndNumbers(arr) {
    let result = [];
    for(let x of arr) {
        let word = x.match(/[a-zA-Z]+/g);
        let number = x.match(/\d+/g);
        if(word) {
            result.push(...word);
        }
        if(number) {
            result.push(...number.map(Number))
        }
    }
    return result;
}



const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

console.log(output);
// output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output
