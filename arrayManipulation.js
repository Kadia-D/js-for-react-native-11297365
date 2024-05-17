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
console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
