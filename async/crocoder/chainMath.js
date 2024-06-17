const  double  = value =>  new Promise((resolve,reject)=> resolve(value * 2));
const  addTen  = value =>  new Promise((resolve,reject)=> resolve(value + 10));
const  multiplyByThree  = value =>  new Promise((resolve,reject)=> resolve(value * 3));

   


let number = 5;
double(number)
.then(addTen)
.then(multiplyByThree)
.then((result) => {
    console.log(result);
  });