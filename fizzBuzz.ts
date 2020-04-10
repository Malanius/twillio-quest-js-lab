const fizzArg = process.argv[2];
const fizzNum = Number(fizzArg);

let message: string = fizzArg;

if (fizzNum % 3 === 0) {
  message = "Java";
}

if (fizzNum % 5 === 0) {
  message = "Script";
}

if (fizzNum % 3 === 0 && fizzNum % 5 === 0) {
  message = "JavaScript";
}

console.log(message);
