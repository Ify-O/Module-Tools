#!/bin/bash

set -euo pipefail

grep -i 'cure' dialogue.txt | awk 'NR%2==0{print; print "---"} NR%2==1{print}'

# TODO: Write a command to output every line in dialogue.txt that contains the string "cure", as well as the line before that line.
# The output should contain two pairs of two lines of text (with a separator between them).
