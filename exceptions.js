// exceptions

console.log("Step 1");
try {
  nonExistentFunction();
  console.log("Step 2");
} catch (error) {
  console.log("Step 3");
  console.error(error);
}
console.log("Step 4");

/* output:
Step 1
Step 3
Uncaught ReferenceError: nonExistentFunction is not defined
Step 4
 */

// throwing exceptions
throw new Error("This is an error message");
