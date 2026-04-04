#!/bin/bash

set -euo pipefail

cat scores-table.txt | awk '{print $1, $2}' 

# TODO: Write a command to output the names of each player, as well as their city.
# Your output should contain 6 lines, each with two words on it, separated by a space.
