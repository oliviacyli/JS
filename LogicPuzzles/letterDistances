/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let sArray = s.split('');
    for (let firstLetter = 0; firstLetter < sArray.length; firstLetter++) {
        for (let secondLetter = firstLetter + 1; secondLetter < sArray.length; secondLetter++) {
            if (sArray[firstLetter] === sArray[secondLetter]) {
                const letterDistance = secondLetter - firstLetter - 1;
                if (letterDistance !== distance[sArray[firstLetter].charCodeAt(0) - 97]) {
                    return false;
                }
            }
        }
    }
    return true;   
};
