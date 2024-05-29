function reverseObject(obj) {
    let result = {};
    for(let [key,value] of Object.entries(obj)){
        result[value] = key
    }
    return result;
}

const originalObj = {aa: "1", bf: "3", cq: "5"};
console.log(reverseObject(originalObj));