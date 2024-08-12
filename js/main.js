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

// 5-Reversing Words in a String
function reverses(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverses("Hello World"));

// 6-even_odd
function evenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOdd(4));

// 7-repeat str
function repeatStr(num, str) {
  let newStr = "";

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;

  // return str.repeat(num);
}

console.log(repeatStr(5, " Ahmed "));

// 8-Jenny_s-message
function greet(name) {
  if (name == "Johnny") {
    return "Hello, my Love!";
  } else {
    return "Hello, " + name;
  }
}

console.log(greet("Johnny"));
console.log(greet("Ahmed"));

// 9-get-opposite
function getOpposite(num) {
  // return num * -1;
  return -num;
}

console.log(getOpposite(-5));
