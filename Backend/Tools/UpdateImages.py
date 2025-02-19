import os

import requests

# Get latest patch
PATCH_VERSION = "14.3.1"

# Riot API URLs
CHAMPION_LIST_URL = f"https://ddragon.leagueoflegends.com/cdn/{PATCH_VERSION}/data/en_US/champion.json"
IMAGE_BASE_URL = f"https://ddragon.leagueoflegends.com/cdn/{PATCH_VERSION}/img/champion/"

# Fetch champion data
response = requests.get(CHAMPION_LIST_URL)
champions = response.json()["data"]

# Create directory
os.makedirs("champion_images", exist_ok=True)

# Download each champion image
for champ_name in champions:
    img_url = f"{IMAGE_BASE_URL}{champ_name}.png"
    img_data = requests.get(img_url).content

    with open(f"champion_images/{champ_name}.png", "wb") as f:
        f.write(img_data)

    print(f"Downloaded: {champ_name}.png")
