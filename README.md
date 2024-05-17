# js-for-react-native-11297365
ID => 11297365

# Task 1 
This has a function that takes an array of numbers as an argument. 
The function returns a new array where every even number of the previous array is squared,
and every odd number is tripled.
 To filter the even numbers I used the modulus sign because the modulus of every even number is zero. 
 The array is iterated over and for every number whose modulus is 0, the number is multiplied by itself to give us its square. 
 If the condition is false for any number (which it will be for every odd number), the number is multiplied by 3.
 The results are then put into a new array and displayed in the terminal.

 # Task 2 
This task has a function that takes two arguments; an array of strings and the array outputted by the function in task 1.
This function modifies the array of strings based on its corresponding number from the numbers array.
For every even number, its corresponding string is capitalized using the .toUpperCase() method.
For odd numbers, their corresponding string is converted to lowercase using the .toLowerCase() method.

# Task 3
A new file was created with a function that takes an array of names and modified names. 
The modified names array is modified using the formatArrayStrings which I imported from the arrayManipulation file.
The function returns an array of objects containing the original names, modified names, and an id using the index of the names, which were auto-incremented to start from 1.