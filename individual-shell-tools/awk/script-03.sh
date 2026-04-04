#!/bin/bash

set -euo pipefail

cat scores-table.txt | awk '{print $1, $3}'

# TODO: Write a command to output just the names of each player along with the score from their first attempt.
# Your output should contain 6 lines, each with one word and one number on it.
# The first line should be "Ahmed 1".
