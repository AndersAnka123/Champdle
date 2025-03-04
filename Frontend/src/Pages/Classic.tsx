import { useEffect, useState } from "react";
import "../Styles/Classic.css";

let ClassicGame = () => {
  const [userGuess, setUserGuess] = useState(""); // Handling user inputs from keyboard and <li> onclick
  const [Dropdown, setDropdown] = useState(false); // Handles dropdown visibility
  const [champions, setChampions] = useState<string[]>([]);
  const [randomChamp, setRandomChamp] = useState<string | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    let fetchChampions = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json"
        );
        const data = await response.json();
        const champNames: any = Object.keys(data.data);
        setChampions(champNames);

        setRandomChamp(
          champNames[Math.floor(Math.random() * champNames.length)]
        );
      } catch (error) {
        console.error("Error fetching champions:", error);
      }
    };
    fetchChampions();
  }, [null]);
  console.log(champions);

  const handleGuess = () => {
    if (!userGuess.trim()) return;
    setGuesses([...guesses, userGuess]);

    if (userGuess.toLowerCase() === randomChamp?.toLowerCase()) {
      alert("Correct champion");
    } else {
      alert("Wrong guess try again");
    }
    setUserGuess("");
  };

  const HandleList = () => {};

  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          value={userGuess}
          type="text"
          className="champInput"
          onFocus={() => setDropdown(true)}
          onChange={(e) => setUserGuess(e.target.value)} // Update state when user types
          onKeyDown={(e) => e.key === "Enter" && handleGuess()}
          onBlur={() => {
            setTimeout(() => {
              setDropdown(false);
            }, 200);
          }}
          placeholder="Enter champ"
        />
        <button className="GuessBtn" onClick={() => {}}>
          Guess
        </button>
        {Dropdown && champions.length > 0 && (
          <ul className="champList">
            {Object.keys(champions[0]) // Get all champion names
              .filter((champ) =>
                champ.toLowerCase().includes(userGuess.toLowerCase())
              ) // Filter based on input
              .map((champ) => (
                <li
                  key={champ}
                  className="champListItem"
                  onClick={() => {
                    setUserGuess(champ);
                    handleGuess;
                  }}
                >
                  {champ}
                </li>
              ))}
          </ul>
        )}
      </div>

      <ul className="GuessedChamps"></ul>
    </div>
  );
};

export default ClassicGame;

let dummyList = [
  {
    Name: "kallista",
    Gender: "Female",
    Lanes: "Bottom",
    Species: "Undead",
    Resource: "Mana",
    Range_Type: "Ranged",
    Regions: ["Shadow isles", "Camavor"],
    relese_Year: 2014,
    img:
      "https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/Kalista.png",
  },
];
