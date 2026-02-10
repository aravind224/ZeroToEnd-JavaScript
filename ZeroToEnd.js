/**
 * Moves all zero values in an array to the end
 * while preserving the order of non-zero elements.
 *
 * @param {number[]} arr - Array of numbers to be processed
 * @returns {number[]} A new array with zeros moved to the end
 */

function moveZerosToEnd(arr) {
    let nonZeros = [];
    let zeros = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            nonZeros.push(arr[i]);
        } else {
            zeros.push(arr[i]);
        }
    }

    return nonZeros.concat(zeros);
}

module.exports = moveZerosToEnd;
