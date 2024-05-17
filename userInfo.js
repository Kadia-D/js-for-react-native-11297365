/*const { formatArrayStrings } = require("./arrayManipulation");

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) =>{
        return {
            id: index+1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

//Example
const originalNames = ["Naya", "Afia", "Rahina", "Gerty", "Kay"];
const modifiedNames = formatArrayStrings(originalNames)
const userProfiles = createUserProfiles(originalNames, modifiedNames, id)
console.log(userProfiles);*/

const { formatArrayStrings } = require("./arrayManipulation");

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example
const originalNames = ["Naya", "Afia", "Rahina", "Gerty", "Kay"];
const numbers = [1, 2, 3, 4, 5]
const modifiedNames = formatArrayStrings(originalNames, numbers);
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
