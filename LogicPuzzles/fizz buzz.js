/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const fizzbuzzArray = [];
    for (i = 1; i < (n + 1); i++) {
        if (i % 15 === 0) {
            fizzbuzzArray.push('FizzBuzz');
        } else if (i % 3 === 0) {
            fizzbuzzArray.push('Fizz');
        } else if (i % 5 === 0) {
            fizzbuzzArray.push('Buzz');
        } else {
            fizzbuzzArray.push(`${i}`);
        }
    }
    return fizzbuzzArray;
};
