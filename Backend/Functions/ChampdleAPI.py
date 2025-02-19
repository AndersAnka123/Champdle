
import random
import json

with open('champions.json', 'r') as champions:
    champs = json.load(champions)

# print(champs)




def selectRandomChamp():
    ListLength = len(champs)
    randomChamp = random.choice(list(champs.keys()))
    print(randomChamp)
    champData = champs[randomChamp]  # Get the corresponding data


    # Print all the champion details
    print(f"Champion: {randomChamp}")
    for key, value in champData.items():
        print(f"{key}: {value}")




selectRandomChamp()







