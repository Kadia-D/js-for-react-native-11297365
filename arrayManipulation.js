function processArray(arr) {
    return arr.map(num => {
        //to square even numbers in array 
        if (num % 2 ===0){
            return num * num;
        }
        else{
            //tripling odd numbers in array
            return num * 3;
        }
    });
}

//Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(processArray(numbers))


function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const num =numbers[index];
        if (num % 2 ===0) {
            //capitaize strings with even corresponding numbers
            return str.toUpperCase();
        }
        else{
            return str.toLowerCase();
        }
    });
}

//Example 2
const strings = ["Hello", "World", "I", "am", "glad", "to", "be","here", "with", "you"]
console.log(formatArrayStrings(strings,numbers))

module.exports = {
    formatArrayStrings
};