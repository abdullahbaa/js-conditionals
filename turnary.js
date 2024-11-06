/**
 * Turnary ==> three parts
 *    ? :
 * condition ? do something when true : do something when false
 * 
 */

const age =20;
// Normal if else
// if(age >= 18){
//     console.log('You can vote.');

// }
// else{
//     console.log('jaw giye porte bosho')
// }

// Simple Turnary
// age > 18 ? console.log('vote dew') : console.log('ghumai jaw')

let price =500;
const isLeader =false;
if(isLeader == true)
{
    price=0;
}
else{
    price = price + 100;
}
console.log(price);

price = isLeader == true ? 0: price + 100;



