function multiply(number){
    //your code here
    let newNumber = Math.abs(number).toString()
    let numberDigits= newNumber.length;
    return number * ( Math.pow(5,numberDigits))
  }