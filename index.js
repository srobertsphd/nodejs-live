const math = require("./math.js");
console.log(math);
let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let result = math.add(num1, num2);
console.log(`sum of numbers ${num1} and ${num2} is ${result}`)



