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
const numbers = [1, 2, 3, 4, 5]
console.log(processArray(numbers))


function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const correspondingNum = numbers [index];
        if (correspondingNum % 2 ===0) {
            //capitaize strings with even corresponding numbers
            return str.toUpperCase();
        }
        else{
            return str.toLowerCase();
        }
    });
}

//Example 2
const strings = ["Guess", "I", "am", "stuck", "here", ]
console.log(formatArrayStrings(strings,numbers))

module.exports = {
    formatArrayStrings
};