//methods
//Fixed: fixed number with decimals
let fixedNumber = 123.456789;
fixedNumber = fixedNumber.toFixed(2);
console.log("fixedNumber: ", fixedNumber, typeof fixedNumber);

//Sting
let stringNumber = 123.456789;
stringNumber = stringNumber.toString();
console.log("To string: " + stringNumber, typeof stringNumber);

//Exponential (e * 10 & + is exponent)
let exponentialNumber = 123.456789;
exponentialNumber = exponentialNumber.toExponential();
console.log("exponentialNumber: ", exponentialNumber, typeof exponentialNumber);

//Precision
let precisionNumber = 123.456789;
precisionNumber = precisionNumber.toPrecision(4);
console.log("precisionNumber", precisionNumber, typeof precisionNumber);

//Number
let nro = 50;
precisionNumber = Number(precisionNumber);
let operation = nro + precisionNumber;
console.log("Number: ", operation);

//parseInt
let numberToParse = "123.456789";
console.log("parseInt:", parseInt(numberToParse));

//parseFloat
console.log("parseFloat:", parseFloat(numberToParse));