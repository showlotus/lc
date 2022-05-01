var removeDigit = function (number, digit) {
  let res = "";
  let len = number.length;
  let hasFind = false;
  let lastIndex = 0;
  for (let i = 0; i < len; i++) {
    if (!hasFind && i < len - 1 && number[i] === digit && number[i + 1] > digit) {
      hasFind = true;
      continue;
    }
    if (number[i] === digit) {
      lastIndex = i;
    }
    res += number[i];
  }
  return res.length === len ? number.slice(0, lastIndex) + number.slice(lastIndex + 1) : res;
};

var number = "123";
digit = "3";

number = "1231";
digit = "1";

// number = "12311";
// digit = "1";

// number =
//   "7795478535679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878";
// // "779547853679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878";
// digit = "5";

console.log(removeDigit(number, digit));
