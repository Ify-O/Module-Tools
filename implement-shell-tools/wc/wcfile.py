import sys

args = sys.argv[1:]

files = [a for a in args if not a.startswith("-")]

for file in files:
    with open(file, "r") as f:
        content = f.read()

        lines = len(content.split("\n"))

        words = len(content.strip().split())

        chars = len(content)

        print(f"{lines} {words} {chars} {file}")