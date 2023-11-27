const arr = [1,2,3,4,5,6];

for (const num of arr) {
    //console.log(num);
}

const greetings = 'Hello World';

for (const green of greetings) {
    //console.log(green);
}

const map = new Map();
map.set('IN', 'India');
map.set('FR', 'France');
map.set('BG', 'Bogota');

//console.log(map);       
for (const [key, value] of map) {
    console.log(`${key} for ${value}`);
}