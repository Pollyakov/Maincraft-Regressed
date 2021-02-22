// const words = ["one", "two", "three", "four", "five"];

// let k = words.forEach(word => console.log(word));

// console.log(k);

// const array = ["one", "two", "tree"];

// const numbers= ["2", "5", "100"];
// let k = numbers.map(el=>Number(el));
// console.log(k);
// const floatNumbers= ["2.5", "5.9", "100.33"];
// k = floatNumbers.map(el=> parseFloat(el));
// console.log(k);

//filter



// const result = words.filter(word => word.length > 6);
// const faceControl = (arr, etalon1, etalon2)=> {
//     return arr.filter((number)=> number>etalon1 && number<etalon2 
//     );
// };
// let k = faceControl(numbers, 100, 6785);
// console.log(k);

// const eveningGreating = name => console.log(`good evening, ${name}`);
// function quotation(name,callback){
//     if (typeof callback==="function"){
//             return callback(name)} else
//             {return console.log(`"${name}"`)};              
//     };
//     quotation('Ksenia');
//     quotation("Ksenia", callback);

// const numbers = [1, 100, 67, -5, 6784, 356, 200];

// const addNumbers = (arr, callback)=> {
//     for (let i =0; i<=arr.length; i++){
//         let sum=0;
//         sum = sum+=arr[i];
//     };
//     console.log(sum);
// };

//forEAch with callback:

// const words = ["one", "two", "three", "four", "five"];
// let myCb = str => {return str.toUppercase();};
//  k = words.forEach(word => {
//     if (typeof callback==="function"){
//         return callback(name)} else
//         {return console.log(`"${name}"`)};              
// };

//      console.log(word));

// console.log(k);

// const words = ["one", "two", "three", "four", "five"];
// const consoleLog = (el, i) => {
//   console.log(el, i);
// };
// const myForEach = (arr, callback) => {
//   if (typeof callback === "function") {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i);
//     }
//   } else return;
// };

// const x = myForEach(words, consoleLog);
// console.log(x);


// for (let i = 10; i>=0; i--){
//     console.log(i);
// };

const printToN = (n, isRev) => {
    if (isRev){ 
         for (let i = 10; i >= 0; i--){
        console.log(i);
    };} else {
        for (let i = 0; i <= n; i++){
            console.log(i);
        };
    };
  
};  
printToN(6, true);

const summOddArr = (arr)=> {
    let sum;
    for (let i=0; i<arr.length-1; i++){
        if (arr[i]%2!==0) {
            sum=sum +arr[i];
        }
    }
};

const maxVal = arr=> {
    let max = 0;
    for (let i=0; i<arr.length; i++){
        if (max<arr[i] {
            max = arr[i];
        };
    }
};

const numbers = [1, 100, 67, -5, 6784, 356, 200];
let k = maxVal(numbers);
console.log(k);

for (let i=0; i<arr.length; i++){
    //sum of the digits

    //fund max
}

let numbers1= [1,3,5,4,7,6,8,9,10];
const maHaser= 