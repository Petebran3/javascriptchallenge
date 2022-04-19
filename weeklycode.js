// very easy
let x1 = 6;
let x2 = 2;

let t1 = "the difference between";

console.log(`${t1}  ${x1} and ${x2} is 4`);
//stop here


//easy

var name1= "Abraham";
var name2= "Maria";

if(name1.length > name2.length){
    console.log(`${name1} is longer than ${name2}`)
}
else {
    console.log(`${name2} is not as long`)
}
//stop here

//medium
const tone = prompt("Shouting");
if (tone === tone.toUpperCase){
    console.log("SHOUTING")
}else if (tone === tone.toLowerCase){
    console.log("whispering")
}else {
    console.log("talking normal")
}




//stop here


//hard
let num1 = number(prompt("pick a number"))
let num2 = number(prompt("pick another number"))

const add = function (num1, num2) {
    return (num1 + num2)
}
console.log(add(num1, num2))

const multiply = function (num1, num2) {
    return num1 * num2
}
console.log(multiply(num1, num2))

const subtract = function (num1, num2) {
    return num1 - num2
}
console.log(subtract(num1, num2))

const divide = function (num1, num2) {
    return num1 / num2
}
console.log(divide(num1, num2))
//stop here


//very hard
const entry = prompt("pick a ooperation 1. add 2. subtract 3. multiply 4. divide")

if (entry == "+"){
    alert(`${num1} + ${num2}= ${add(num1, num2)}`)
}else if (entry == "-"){
    alert(`${num1} - ${num2}= ${subtract(num1, num2)}`)
}else if (entry == "*"){
    alert(`${num1} * ${num2}= ${multiply(num1, num2)}`)
}else if (entry == "/"){
    alert(`${num1} / ${num2}= ${divide(num1, num2)}`)
}

//stop here