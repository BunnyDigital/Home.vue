if (process.env.NODE_ENV) {
require("dotenv").config({
    path: '${_dirname}/.env.${process.env.NODE_ENV}'
});
} else {
    require("dotenv").config();
}

console.log('${_dirname}/.env.${process.env.NODE_ENV}')
console.log(process.env.MY_VAR)
console.log(process.env.NUMBER);
