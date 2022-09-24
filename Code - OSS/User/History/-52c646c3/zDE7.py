import argparse

parse = argparse.ArgumentParser()
parse.add_argument("number1", help="first number")
parse.add_argument("number2", help="second number")
parse.add_argument("number3", help="third number")

args = parse.parse_args()

print(args.number1)
print(args.number2)
print(args.number3)
