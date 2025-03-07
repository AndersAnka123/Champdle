import { useEffect, useState } from "react";
import "../Styles/Classic.css";
import ChampsComponent from "../Components/champList";

let ClassicGame = () => {
  const [userGuess, setUserGuess] = useState(""); // Handling user inputs from keyboard and <li> onclick
  const [Dropdown, setDropdown] = useState(false); // Handles dropdown visibility
  const [guesses, setGuesses] = useState<string[]>([]);

  const guessChampion = () => {};

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
        {Dropdown && <ChampsComponent />}
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
