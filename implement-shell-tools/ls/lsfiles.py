import sys
import os

args = sys.argv[1:]

show_all = "-a" in args

paths = [arg for arg in args if not arg.startswith("-")]

for path in paths:
    if os.path.isdir(path):
        files = os.listdir(path)

        if not show_all:
            files = [f for f in files if not f.startswith(".")]

        for f in files:
            print(f)
    else:
        print(path)