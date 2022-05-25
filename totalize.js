const fs = require("fs");
const Path = require("path");

let fileNums = 0;

function readdir(dirPath) {
  fs.readdir(dirPath, {}, (err, files) => {
    files.forEach((path) => {
      const filePath = Path.resolve(dirPath, path);
      fs.stat(filePath, (err, stat) => {
        if (stat.isDirectory()) {
          readdir(filePath);
        } else if (filePath.endsWith(".js")) {
          fileNums++;
        }
      });
    });
  });
}

readdir("./");

setTimeout(() => {
  console.log(fileNums);
}, 2000);
