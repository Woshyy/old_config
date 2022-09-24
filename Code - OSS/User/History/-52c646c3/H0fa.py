import argparse

parse = argparse.ArgumentParser(desc="For something")
parse.add_argument("number1", help="first number")
parse.add_argument("number2", help="second number")
parse.add_argument("number3", help="third number")

print(parse.number1)
print(parse.number2)
print(parse.number3)
