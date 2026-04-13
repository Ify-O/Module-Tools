const fs = require("fs");

const files = ["1.txt", "2.txt", "3.txt"];

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  console.log(content);
});
