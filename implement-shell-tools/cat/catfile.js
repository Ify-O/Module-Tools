const fs = require("fs");

const args = process.argv.slice(2);

const showNumber = args.includes("-n");

const files = args.filter((arg) => !arg.startsWith("-"));

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    if (showNumber) {
      console.log(`${index + 1} ${line}`);
    } else {
      console.log(line);
    }
  });
});
