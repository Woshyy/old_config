import argparse

parser = argparse.ArgumentParser(description="Process some intergers.")
parser.add_argument('integers', metavar='N', type=int, nargs='+', help='an integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const', const=sum, default=max)
print("Does this thing run?")
args = parser.parse_args()
print(args.accumulate(args.intergers))