// modules

// helpers.js
//note the "export" keyword
export class Helper {
  capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
}

// named exports
export const votingAge = 18;
export const settings = {
  theme: "light",
  admin: false,
};

// default exports
export default class Helper2 {
  capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
}
