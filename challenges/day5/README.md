## Flick Switch

### Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

### Examples

```sh
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

```

## Currying functions: multiply all elements in an array
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

### Example:
```sh
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
```
