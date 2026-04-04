#!/bin/bash

set -euo pipefail

cat scores-table.txt | grep London | awk '{print $1, $5}'

# TODO: Write a command to output just the names of each player in London along with the score from their last attempt.
# Your output should contain 3 lines, each with one word and one number on it.
# The first line should be "Ahmed 4".
