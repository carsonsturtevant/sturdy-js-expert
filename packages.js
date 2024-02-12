// npm packages

// in the package.json file you specify the packages you want to use in
// your project with a name and a version number.

// example:
// {
//     "dependencies": {
//        "webpack": "~2.6.1"
//    }
// }
// the ~ symbol means that you want to install the latest patch version
// of the package.

// it goes major.minor.patch

// if you want to install the latest minor version you can use the ^ symbol
// like this ^2.6.1

// if you want to install the latest major version you can use the * symbol
// like this *2.6.1

// yarn is another package manager that is similar to npm
// yarn has flat mode which means that it ensures that there is only one
// version of a package in your project.

/** npm to yarn translations
 * # init package.json
npm init
yarn init

# install package locally
npm install {package-name}
yarn add {package-name}

# install package globally
npm install {package-name} --global
yarn global add {package-name}
 */
