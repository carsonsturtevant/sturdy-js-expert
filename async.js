// async

console.log("A");
setTimeout(() => {
  console.log("B");
}, 1_000);
console.log("C");
// "A", "C", "B"
