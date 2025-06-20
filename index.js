// Code your solutions in this file
function writeCards(names){
    return names.map(name=> `Thank you, ${name}, for the wonderful surprise gift!`);
}
function countDown(num){
    for (let i=num;i>=0; i--){
        console.log(i);
    }
}
console.log("Counting down from 10:");
countDown(10)
const names=["Guadalupe","Ollie","Aki"]
const messages=writeCards(names);