const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    rb: 'Ruby',    
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "HMTL", "CSS"];

console.log(programming);
for (const key in programming) {
    console.log(programming[key]);    
}