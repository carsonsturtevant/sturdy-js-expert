// modules 2

// imports must go a the top of the file because they are synchronous
import { Helper } from "./helpers.js";
import helpernumber2 from "./helpers.js"; //default export can be renamed
import { settings, votingAge } from "./config.js";
import { getDate as getDateHelper } from "./date-helpers.js"; //can rename named
import _ from "lodash"; // import from libaries

// dynamic import
import("./helpers.js").then((module) => {
  console.log(module);
});

new Helper();
