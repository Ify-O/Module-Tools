import sys
import os

args = sys.argv[1:]

show_all = "-a" in args

paths = [arg for arg in args if not arg.startswith("-")]