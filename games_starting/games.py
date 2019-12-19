import random

money = 100

#Write your game of chance functions here
def flip_coin(bet, call):
    coins = ["Heads", "Tails"]
    index = random.randint(0, 1)
    if call == coins[index]:
        return bet 
    else:
        return -bet 
    
def cho_han(bet, guess):
    dice_1 = random.randint(1, 6)
    dice_2 = random.randint(1, 6)

    sum = dice_1 + dice_2
    even_or_odd = "Even" if sum % 2 == 0 else "Odd" 
    if even_or_odd == guess:
        return bet
    else:
        return -bet

def pick_a_card(bet):
    card_1 = random.randint(2, 11)
    card_2 = random.randint(2, 11)

    if card_1 > card_2:
        return bet 
    elif card_1 < card_2:
        return -bet 
    else:
        return 0




#Call your game of chance functions here
print(flip_coin(60, "Heads"))
print(flip_coin(60, "Tails"))
print(play_game(60, "Even"))
