// date

// for a long time moment.js was the go-to libary for date manipulation
// but it is now considered a legacy library
// the modern alternative is date-fns

import { format, addYears } from "date-fns";
const date = new Date();
console.log(date); // Fri Apr 09 2021 15:40:57 GMT+0200 (Central European Summer Time)

const futureDate = addYears(date, 3);
console.log(futureDate); // Tue Apr 09 2024 15:40:57 GMT+0200 (Central European Summer Time)
