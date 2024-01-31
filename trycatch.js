// try-catch

console.log("Step 1");
try {
  nonExistentFunction();
} catch (error) {
  console.error(error); // Uncaught ReferenceError: nonExistentFunction is not defined
}
console.log("Step 2");
