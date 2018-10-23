printCalculation("+",sum);
printCalculation("-",difference);
printCalculation("x",product);
printCalculation(":",quotient);
function printCalculation(operator, calculate){
    console.log("20 "+operator+" 3 = " + calculate(20,3));
}
function sum(num1, num2){
    return num1 + num2;
}
function difference(num1 , num2){
    return num1 - num2;
}
function product(num1 , num2){
    return num1 * num2;
}
function quotient(num1 , num2){
    return num1 / num2;
}
