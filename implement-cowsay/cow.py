import cowsay
import argparse

parser = argparse.ArgumentParser(description="Make animals say things")

parser.add_argument(
    "message",
    nargs="+",
    help="The message to say."
)

parser.add_argument(
    "--animal",
    choices=cowsay.char_names,  # 🔥 IMPORTANT (dynamic list from library)
    default="cow",
    help="The animal to be saying things."
)

args = parser.parse_args()