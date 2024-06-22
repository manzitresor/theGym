## Keep up the hoop
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

```sh 
  If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
  If he doesn't get 10 hoops, return the string "Keep at it until you get it".
```

## Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### Example: (Input --> Output)
```sh
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
```

## Short Long Short

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

```sh 
("1", "22") --> "1221"
("22", "1") --> "1221"
```