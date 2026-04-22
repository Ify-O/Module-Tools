import sys

# Get command line arguments (skip script name)
args = sys.argv[1:]

# Check if -n flag exists
show_number = "-n" in args

# Get file names (ignore flags)
files = [arg for arg in args if not arg.startswith("-")]

for file in files:
    with open(file, "r") as f:
        lines = f.read().split("\n")

        for index, line in enumerate(lines):
            if show_number:
                print(f"{index + 1} {line}")
            else:
                print(line)