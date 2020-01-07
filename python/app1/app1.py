import json
from difflib import get_close_matches
import pdb

dict = json.load(open('data.json'))

def definition(w):
    w = w.lower()
    diffs = get_close_matches(w, dict.keys())
    if w in dict:
        return '\n'.join(dict[w])
    elif len(diffs) > 0:
        answer = input("Did you mean '%s'? Type 'Y' or 'N'\n" % diffs[0])
        if answer == 'Y':
            return '\n'.join(dict[diffs[0]])
        else:
            return "Sorry, I can't find the word you're looking for."
    else:
        return "That word doesn't exist in my dictionary."

word = input("Enter a word: \n")
print(definition(word))


