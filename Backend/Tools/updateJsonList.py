import requests
import json

# Get latest patch version
patch_url = "https://ddragon.leagueoflegends.com/api/versions.json"
latest_patch = requests.get(patch_url).json()[0]

# API URLs
CHAMPION_LIST_URL = f"https://ddragon.leagueoflegends.com/cdn/{latest_patch}/data/en_US/champion.json"
BASE_IMAGE_URL = f"https://ddragon.leagueoflegends.com/cdn/{latest_patch}/img/champion/"
BASE_SPLASH_URL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"

# Manually adding missing data (Release Year, Gender, Species, Region)
manual_data = {
    "Aatrox": {"releaseYear": 2013, "gender": "Male", "species": ["Darkin"], "region": ["Runeterra"]},
    "Ahri": {"releaseYear": 2011, "gender": "Female", "species": ["Vastaya"], "region": ["Ionia"]},
    "Akali": {"releaseYear": 2010, "gender": "Female", "species": ["Human"], "region": ["Ionia"]},
    "Alistar": {"releaseYear": 2009, "gender": "Male", "species": ["Minotaur"], "region": ["Runeterra"]},
    "Amumu": {"releaseYear": 2009, "gender": "Male", "species": ["Yordle"], "region": ["Shurima"]},
    "Anivia": {"releaseYear": 2009, "gender": "Female", "species": ["Spirit"], "region": ["Freljord"]},
    "Annie": {"releaseYear": 2009, "gender": "Female", "species": ["Human"], "region": ["Noxus"]},
    "Aphelios": {"releaseYear": 2019, "gender": "Male", "species": ["Human"], "region": ["Targon"]},
    "Ashe": {"releaseYear": 2009, "gender": "Female", "species": ["Iceborn"], "region": ["Freljord"]},
    # Add more champions here...
}

# Fetch champion data
champions = requests.get(CHAMPION_LIST_URL).json()["data"]

champion_data = {}

for champ_name, champ_info in champions.items():
    champion_data[champ_name] = {
        "title": champ_info["title"],
        "region": manual_data.get(champ_name, {}).get("region", ["Unknown"]),
        "roles": champ_info["tags"],  # e.g., ["Mage", "Assassin"]
        "releaseYear": manual_data.get(champ_name, {}).get("releaseYear", "Unknown"),
        "gender": manual_data.get(champ_name, {}).get("gender", "Unknown"),
        "resource": champ_info["partype"],  # Mana, Energy, None, etc.
        "rangeType": "Melee" if champ_info["info"]["attack"] > champ_info["info"]["magic"] else "Ranged",
        "species": manual_data.get(champ_name, {}).get("species", ["Unknown"]),
        "splashArt": f"{BASE_SPLASH_URL}{champ_name}_0.jpg",
        "icon": f"{BASE_IMAGE_URL}{champ_name}.png"
    }

# Save to JSON file
with open("champions.json", "w", encoding="utf-8") as file:
    json.dump(champion_data, file, indent=4)

print("Champion data saved to champions.json!")
