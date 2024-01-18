// implicit return

/*
    For the implicit return to work, you must have all the following conditions:
    Your function must be an arrow function.
    The function body must be only one statement. This means you must remove the curly braces.
    You must remove the return keyword because the function body is one statement.
*/

//implicit return
const add = (a, b) => a + b;
const addOne = a => a + 1;