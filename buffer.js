const buf = Buffer.from([1,2,3]);
const json = JSON.stringify(buf);

console.log(buf);
console.log(json);

for(var i of buf) {
  console.log(i);
}


