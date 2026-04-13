const fs = require("fs");

const args = process.argv.slice(2);
const files = args.filter((a) => !a.startsWith("-"));

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");

  const lines = content.split("\n").length;
  const words = content.trim().split(/\s+/).length;
  const chars = content.length;

  console.log(`${lines} ${words} ${chars} ${file}`);
});
