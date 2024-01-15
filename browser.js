// const decode = require('heic-decode');
import decode from "heic-decode";
// const formats = require('./formats-browser.js');
import formats from "./formats-browser.js";
// const { one, all } = require('./lib.js')(decode, formats);
import lib from "./lib.js";

const { one } = lib(decode, formats);

export default one;
