const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i);
  if (input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'u') {
    resultArray.push(input[i]);
  }
  for (let e = 0; e < vowels.length; e++){
    //console.log(e);
    if (input[i].toLowerCase() === vowels[e]) {
      console.log(vowels[e]);
      resultArray.push(vowels[e]);
    }   
  }
};
console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
