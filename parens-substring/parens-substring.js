function parensSubstring(str) {
  // steps 1: remove the outter facing brackets from the start and end
  const firstOpeningBracketIndex = str.indexOf("(");
  const lastClosingBracketIndex = str.lastIndexOf(")");
  const cleanedStr = str.substr(
    firstOpeningBracketIndex,
    lastClosingBracketIndex + 1
  );
  // step 2: check each opening bracket against each closing bracket after
  // the current opening bracket while counting the valid pairs
  let validPairs = 0;
  for (let i = 0; i < cleanedStr.length; i++) {
    if (cleanedStr[i] !== "(") continue;
    for (let j = i; j < cleanedStr.length; j++) {
      if (cleanedStr[j] !== ")") continue;
      validPairs++;
    }
  }
  // step 3: return the counter
  return validPairs;
}

console.log(parensSubstring("(()("));
// 2
console.log(parensSubstring(")()(()))"));
// 10;
console.log(parensSubstring("()((()"));
// 5
console.log(parensSubstring("()()"));
// 3
console.log(parensSubstring("())("));
// 2
