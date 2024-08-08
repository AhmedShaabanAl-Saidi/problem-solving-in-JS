// 1-Formatting decimal places
function twoDecimals(num) {
  return Number(num.toFixed(2));
}

console.log(twoDecimals(5.8545));

// 2-MakeUpperCase
function upperCase(str) {
  return str.toUpperCase();
}

console.log(upperCase("ahmed"));

// 3-Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("AhmedShaaban"));

// 4-Remove String Spaces
function removeSpaces(str) {
  return str.split(" ").join("");
}

console.log(removeSpaces("Hell    o Wo    rld !"));

// 4-Reversing Words in a String
function reverses(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverses("Hello World"));
