module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const numberToWordMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
  const numberAsString = String(number);
  const numberLength = numberAsString.length;
  const result = [];

  switch (numberLength) {
    case 3: {
      result.push(numberToWordMap[numberAsString[0]]);
      result.push('hundred');
    }
    case 2: {
      if (Number(numberAsString[numberLength - 2]) >= 2) {
        result.push(numberToWordMap[numberAsString[numberLength - 2] + '0']);
      } else if (numberAsString[numberLength - 2] !== '0') {
        result.push(numberToWordMap[numberAsString.substring(numberLength - 2)]);
        break;
      }
    }
    case 1: {
      result.push(numberToWordMap[numberAsString[numberLength - 1]]);
    }
  }

  return result.join(' ').trim();
}
