const removeFromArray = function(arr, ...args) {
    for (let word of args) {
        while (arr.includes(word)) {
            let index = arr.indexOf(word);
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
    }
    return arr;
};

// // Odin solution 01
// const removeFromArray = function (array, ...args) {
//     const newArray = [];
//     array.forEach((item) => {
//         if(!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// }

// // Odin solution 02
// const removeFromArray = function (array, ...args) {
//     return array.filter(item => !args.includes(item));
// }

// Do not edit below this line
module.exports = removeFromArray;
