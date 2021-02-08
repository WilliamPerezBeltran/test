const app = require("electron").app;
const path = require("path");
var fs = require('fs');

let filePathDb = path.join(`${app.getPath("userData")}`, 'db.sqlite3');
let DBPATH = path.resolve(app.getPath("userData"), "db.sqlite3");
if(!fs.existsSync(filePathDb)){
	fs.writeFile(filePathDb, '', function (err) {
		if (err) throw err;
		console.log('File is created successfully.');
		});
}
console.log(app.getPath("userData"))
console.log(filePathDb)

 module.exports = {
  DBPATH,
};

