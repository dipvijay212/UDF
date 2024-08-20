function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function val(){
    console.log("Please Enter a Valid Symbol.")
}
let choices=prompt("Press + to Addition.\nPress - to Subtraction.\nPress * to Multiply.\n Press / to Division.");
let a=prompt("Enter a 1st Number: ");
let b=prompt("Enter a 2nd Number: ");
a=Number(a);
b=Number(b);
switch (choices) {
    case '+':
              add(a,b);
              console.log("Addition: ",add(a,b));
        break;
    case '-':
        sub(a,b);
        console.log("Subtraction: ",sub(a,b));
        break;
        case '*':
        mul(a,b);
        console.log("Multiply: ",mul(a,b));
        break;
        case '/':
        div(a,b);
        console.log("Division: ",div(a,b));
        break;
    default:
           val()
        break;
}