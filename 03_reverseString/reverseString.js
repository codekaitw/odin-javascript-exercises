const reverseString = function(string) {
    if (string.length === 0) {
        return '';
    }
    if (string.length === 1) {
        return string;
    }
    return reverseString(string.slice(1)) + string[0];
};

// Solution using loop
// const reverseStringLoop = function(string) {
//     if (string.length === 0) {
//         return '';
//     }
//     let result = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         result += string[i];
//     }
//     return result;
// }


// Do not edit below this line
module.exports = reverseString;
