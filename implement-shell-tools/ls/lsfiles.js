const fs = require("fs");

const args = process.argv.slice(2);

const showAll = args.includes("-a");

const paths = args.filter((arg) => !arg.startsWith("-"));

paths.forEach((path) => {
  const stat = fs.statSync(path);

  if (stat.isDirectory()) {
    let files = fs.readdirSync(path);

    if (!showAll) {
      files = files.filter((f) => !f.startsWith("."));
    }

    files.forEach((f) => console.log(f));
  }

  else {
    console.log(path);
  }
});
