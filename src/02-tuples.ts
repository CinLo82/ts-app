const prices: (number | string)[] = [1,2,3,4,5,'shdja'];
prices.push(3);
prices.push('3');


// tuple
let user: [string, number, boolean];
user = ['cinlo02', 15, true];

const [username, age] = user; // desectructurar una tuple, el 3er elemento lo ignora
console.log(username);
console.log(age);
