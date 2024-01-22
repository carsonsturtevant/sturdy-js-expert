// nullish coalescing
// nullish = null or undefined

const getName = name => {
    return name ?? "N/A";
}

// This operator is useful to avoid showing undefined or null
// to the User Interface, which are often signs of bugs.

// null vs undefined
// undefined = the property has not been defined yet
// null = the property has been defined but is empty

// nullish coalescing operator precedence is low
const user = {
    id: 1
}
const result = 2 + user.age ?? 18; // it will do the addition first

