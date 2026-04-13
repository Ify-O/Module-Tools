const fs = require("fs");

const dir = process.argv[2] || ".";
const showAll = process.argv.includes("-a");

let files = fs.readdirSync(dir);

if (!showAll) {
  files = files.filter((f) => !f.startsWith("."));
}

console.log(files.join("\n"));
