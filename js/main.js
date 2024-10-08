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

// 10-sum of positive
function sumPositive(arr) {
  let sumNums = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumNums += arr[i];
    }
  }

  return sumNums;
}

console.log(sumPositive([5, 10, 5, -5, -2]));

// 11-Double char
function doubleChar(char) {
  return char
    .split("")
    .map((ele) => ele.repeat(2))
    .join("");
}

console.log(doubleChar("Ahmed"));

// 12-basicMathematical
function basicMathematical(operator, value1, value2) {
  // if (operator == "+") {
  //   return value1 + value2;
  // } else if (operator == "-") {
  //   return value1 - value2;
  // } else if (operator == "*") {
  //   return value1 * value2;
  // } else if (operator == "/") {
  //   return value1 / value2;
  // }

  return eval(value1 + operator + value2);
}

console.log(basicMathematical("*", 2, 3));

// 13-convert-number-to-reversed-array-of-digits
function reversDigits(num) {
  let reversed = num
    .toString()
    .split("")
    .map((ele) => Number(ele))
    .reverse();

  return reversed;
}

console.log(reversDigits(123456789));

// 14-convert-boolean-values-to-string
function boolToWord(bool) {
  // if (bool == true) {
  //   return "Yes";
  // } else {
  //   return "No";
  // }

  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));

// 15-find needle-in-the-haystack
function findNeedle(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == "needle") {
  //     return "found the needle at position " + i;
  //   }
  // }

  return "found the needle at position " + arr.indexOf("needle");
}

console.log(findNeedle(["Ahmed", "Ali", "needle", "mo", "Amr", "yossef"]));

// 16-KeepHydrated
function keepHydrated(time) {
  return Math.floor(time / 2);
}

console.log(keepHydrated(5));

// 17-SentenceSmash
function sentenceSmash(arr) {
  return arr.join(" ");
}

console.log(sentenceSmash(["Hi", "My", "Name", "is", "Ahmed"]));

// 18-GetBonus
function GetBonus(salary, bonus) {
  // if (bonus == true) {
  //   return "€" + salary * 10;
  // } else {
  //   return "€" + salary;
  // }

  return bonus ? `€${salary * 10}` : `€${salary}`;
}

console.log(GetBonus(10, true));

// 19-CountTheMonkeys
function countTheMonkeys(num) {
  let = newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(countTheMonkeys(5));

// 20-InvertValue
function invertValue(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i] * -1);
  // }
  // return newArr;

  return arr.map((ele) => ele * -1);
}

console.log(invertValue([1, 5, 7, 6, -4, 5, 4, -6]));

// 21-Printing Array
function printingArray(arr) {
  return arr.join();
}

console.log(printingArray(["A", "h", "m", "e", "d"]));

// 22-Removing Elements
function removingElements(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i % 2 == 0) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;

  return arr.filter((ele, i) => i % 2 == 0);
}

console.log(
  removingElements(["keep", "remove", "keep", "remove", "keep", "remove"])
);

// 23-SwitchItUP
function SwitchItUP(num) {
  switch (num) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    default:
      return "invalid number";
  }
}

console.log(SwitchItUP(8));

// 24-Volume of a Cuboid
function volumeCuboid(length, width, height) {
  return length * width * height;
}

console.log(volumeCuboid(10, 10, 10));