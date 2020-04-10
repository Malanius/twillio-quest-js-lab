const sortFirstArg = process.argv[2].toLocaleLowerCase();
const sortSecondArg = process.argv[3].toLocaleLowerCase();

let compareResult: number = 0;

if (sortFirstArg < sortSecondArg){
    compareResult = -1;
}

if (sortFirstArg > sortSecondArg){
    compareResult = 1;
}

console.log(compareResult);

