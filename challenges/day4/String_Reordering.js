function sentence(arrayOfObjects) {
    const keyValuePairs = [];
   
     arrayOfObjects.forEach(obj => {
       const key = parseInt(Object.keys(obj)[0], 10);
       const value = Object.values(obj)[0];
       keyValuePairs.push([key, value]);
     });
     
     keyValuePairs.sort((a, b) => a[0] - b[0]);
     const sortedValues = keyValuePairs.map(pair => pair[1]);
     
     return sortedValues.join(' ');
     
   }

//    doTest(
//     [{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}],
//     'Forget it Jake. It is Chinatown'
// );
// doTest([ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ], 'I love vatsan!');
// doTest([ {'0': 'Wars'}, {'-1': 'Code'} ],'Code Wars');