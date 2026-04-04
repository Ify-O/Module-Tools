#!/bin/bash

set -euo pipefail

cat scores-table.txt | awk '{print $1}' 

# TODO: Write a command to output just the names of each player in `scores-table.txt`.
# Your output should contain 6 lines, each with just one word on it.
