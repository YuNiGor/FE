// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(str) {
  const words = str.split(' ');
  let maxScore = 0;
  let highScoreWord = '';

  for (let word of words) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }
    if (score > maxScore) {
      maxScore = score;
      highScoreWord = word;
    }
  }

  return highScoreWord;
}



// https://www.codewars.com/kata/5861d28f124b35723e00005e

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  const maxDistance = mpg * fuelLeft;
  return maxDistance >= distanceToPump;
}


// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
  return array.map((number) => -number);
}


// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}


// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    years++;
  }
  return years;
}


// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}


// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}


// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(names) {
  return names.filter(name => name.length === 4);
}


// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}


