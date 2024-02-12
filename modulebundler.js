// module bundler

// <script src="index.js"></script>
// this type of script does not support import/export statements

// also can not do inline script import/export like this:
<script>import {something} from "./file.js"; // Syntax error</script>;

// need to use type="module" attribute in the script tag
<script type="module">
  import {something} from "./file.js"; // works as expected
</script>;

// bare imports do not work on the web
// import {Component} from "react"; // Syntax error
// to make these work you need to use a module bundler like webpack, parcel, vite

// module bundlers do the following:
// 1. combine all the files into one file
// 2. dependency resolution
// 3. running automated tasks
// 4. cache busting (changing the file name to avoid caching)
