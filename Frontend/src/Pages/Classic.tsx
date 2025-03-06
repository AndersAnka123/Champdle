import { useEffect, useState } from "react";
import "../Styles/Classic.css";
import getChampsFunction from "../Hooks/GetRandomChamp";

let ClassicGame = () => {
  const [userGuess, setUserGuess] = useState(""); // Handling user inputs from keyboard and <li> onclick
  const [Dropdown, setDropdown] = useState(false); // Handles dropdown visibility
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    getChampsFunction();
  });

  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          value={userGuess}
          type="text"
          className="champInput"
          onFocus={() => setDropdown(true)}
          onChange={(e) => setUserGuess(e.target.value)} // Update state when user types
          // onKeyDown={(e) => e.key === "Enter" && handleGuess()}
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
        {/* {Dropdown && champions.length > 0 && (
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
        )} */}
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
