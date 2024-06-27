## Milk and Cookies for Santa
Happy Holidays fellow Code Warriors!
It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?

Time for Milk and Cookies
Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

Keep in mind Javascript's Date month is 0 based!

```sh 
timeForMilkAndCookies(new Date(2013, 11, 24))  // true
timeForMilkAndCookies(new Date(2013, 0, 23))   // false
timeForMilkAndCookies(new Date(3000, 11, 24))  // true
```

## Finding length of the sequence

As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0.

