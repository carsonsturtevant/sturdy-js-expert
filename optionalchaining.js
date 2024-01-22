// optional chaining

const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}

user.details?.name?.firstName; // "Sam"
user.data?.id; // undefined
user.children?.names; // undefined
user.details?.parent?.firstName; // undefined

// can also use for arrays
const firstValue = data.temperatures?.[0];

// and for functions
const uCN = person.name?.toUpperCase(); // where name could be null
const uCN2 = person.name?.toUpperCase?.(); // where name could be a nubmer

// dont overuse optional chaining

// optional chaining is typically not used for assignments
// but you can use it like this for safe assignment
const settings = {};
settings?.theme && (settings.theme = "dark");
// it will only run the right expression if settings.theme exists

