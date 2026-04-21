import cowsay
import argparse

parser = argparse.ArgumentParser(description="Make animals say things")

parser.add_argument(
    "message",
    nargs="+",
    help="The message to say."
)

