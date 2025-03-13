import { useEffect, useState } from "react";
import "../Styles/Classic.css";
// import ChampsComponent from "../Components/champList";
import useChamps from "../Hooks/GetRandomChamp";
import GuessedChamps from "../Hooks/HandleUserGuessFilter";

let ClassicGame = () => {
  const [userGuess, setUserGuess] = useState(""); // Handling user inputs from keyboard and <li> onclick
  const [Dropdown, setDropdown] = useState(false); // Handles dropdown visibility
  const [guesses, setGuesses] = useState<string[]>([]);

  const { champList, randomChamp, loading, error } = useChamps();

  randomChamp.toLowerCase();
  if (loading) {
    console.log("Loading champs...");
  }
  if (error) console.error("There was a error: " + error);

  function GuessChampion(guess: string, randChamp: string = randomChamp) {
    GuessedChamps(guess, randChamp);
    // setDropdown(false);
  }

  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          autoFocus
          value={userGuess}
          type="text"
          className="champInput"
          onFocus={() => setDropdown(true)}
          onChange={(e) => setUserGuess(e.target.value)} // Update state when user types
          onKeyDown={(e) => e.key === "Enter" && GuessChampion(userGuess)}
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
        {(Dropdown || userGuess.length > 0) && (
          <ul className="champList">
            {champList.map(
              (champ) =>
                champ.toLowerCase().includes(userGuess.toLowerCase()) && (
                  <li
                    key={champ}
                    className="champListItem"
                    onClick={() => GuessChampion(champ.toLowerCase())}
                  >
                    {champ}
                  </li>
                )
            )}
          </ul>
        )}
      </div>

      <ul className="GuessedChamps">{/* <GuessedChamps /> */}</ul>
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
