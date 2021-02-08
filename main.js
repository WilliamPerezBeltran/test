const app = require("electron").app;
const path = require("path");
const os = require("os");

const process = require('process'); 
console.log("process-----------------------------")
// console.log(process.env); 
console.log(process.env["APPDATA"]); 
console.log("process-----------------------------")


console.log('============wwwwwwwwwwwwwwwwwww==============')
console.log(app.getPath("appData"))
console.log('==========================')
// to get access to db through this path
// nano /home/user/.config/@coreui/coreui-free-react-admin-template/db.sqlite3

// const DBPATH = path.resolve(`${__dirname}/db`, "db.sqlite3");
const DBPATH = path.resolve(app.getPath("userData"), "db.sqlite3");

console.log("***********************"); // "Windows_NT"
console.log(os.type().toLowerCase()); // "Windows_NT"
console.log(os.release()); // "10.0.14393"
console.log(os.platform()); // "win32"
console.log("***********************"); // "Windows_NT"





module.exports = {
  DBPATH,
};


// const app = require("electron").app;
// app.getPath("appData")

// y sale esto:
// /home/user/.config


