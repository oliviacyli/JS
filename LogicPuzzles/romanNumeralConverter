/**
 * @param {string} s
 * @return {number}
 */

const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var romanToInt = function(s) {
    const sArray = s.split('');
    let total = 0;
    for (let index = 0; index < sArray.length; index++) {
        switch (sArray[index]) {
            case 'I':
                if (sArray[index + 1] === 'V' || sArray[index + 1] === 'X') {
                    total += (numerals[`${sArray[index + 1]}`] - numerals[`${sArray[index]}`]);
                    index++;
                } else {
                    total += numerals.I;
                }
                break;
            case 'V':
                total += numerals.V;
                break;
            case 'X':
                if (sArray[index + 1] === 'L' || sArray[index + 1] === 'C') {
                    total += (numerals[`${sArray[index + 1]}`] - numerals[`${sArray[index]}`]);
                    index++;
                } else {
                    total += numerals.X;
                }
                break;
            case 'L':
                total += numerals.L;
                break;
            case 'C':
                if (sArray[index + 1] === 'D' || sArray[index + 1] === 'M') {
                    total += (numerals[`${sArray[index + 1]}`] - numerals[`${sArray[index]}`]);
                    index++;
                } else {
                    total += numerals.C;
                }
                break;
            case 'D':
                total += numerals.D;
                break;
            case 'M':
                total += numerals.M;
                break;
        }
    }
    return total; 
};
