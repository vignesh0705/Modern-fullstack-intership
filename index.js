console.log(a);//undefined 

var a = 14;
console.log("a =",a);
let b = 30;
function app(){
    let b = 10;
    console.log("b = ", b);
    console.log("a = ", a);
}
console.log("b = ", b);
const c = 10
console.log("c =", c)
//c=30; //type error 

//let a=30; //syntax error 

app();