import { useEffect, useState } from "react";
import "../Styles/Classic.css";
import championsData from "../assets/champions.json";

let ClassicGame = () => {
  let [Dropdown, IsDropdown] = useState(false);
  let [userinput, setUserInput] = useState("");
  let [guessedChamp, setGuessedChamp] = useState("");
  let [selectedChamp, setSelectedChamp] = useState("");
  const [data, setData] = useState(null);
  const [loadingm, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [randomChamp, setRandomChamp] = useState(null);

  function getRandomChamp() {
    let champKeys = Object.keys(championsData); // Get champion names
    let champLength = champKeys.length;

    if (champLength === 0) return;

    let randIndex = Math.floor(Math.random() * champLength);
    let randomChampName = champKeys[randIndex]; // Get a random champion name
    let randomChamp = championsData[randomChampName]; // Get champion details
  }

  // Example usage
  console.log(getRandomChamp());
  let url = "http://localhost:8000/getNewChamp";
  useEffect(() => {
    let fetchData = async () => {
      setloading(true);
      let response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [0]);

  // console.log(data);

  function HandleUserInput(e: any) {
    setUserInput(e.target.value);

    if (userinput != null) IsDropdown(true);
    else IsDropdown(false);
    console.log(userinput);
  }

  function GuessChamp() {
    alert(userinput);
  }
  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          type="text"
          className="champInput"
          onKeyUp={HandleUserInput}
          onBlur={() => {
            setTimeout(() => {
              IsDropdown(false);
            }, 200);
          }}
          placeholder="Enter champ"
        />
        <button
          className="GuessBtn"
          onClick={() => {
            setGuessedChamp(userinput);
            GuessChamp();
          }}
        >
          Guess
        </button>
        {Dropdown && (
          <ul className="champList">
            {dummyList.map((item: any, index: number) => {
              if (item.Name.includes(userinput)) {
                return (
                  <li
                    key={index}
                    className="listItem"
                    onClick={() => {
                      setGuessedChamp(item.Name);
                      setTimeout(GuessChamp, 200);
                    }}
                  >
                    {item.Name.toLowerCase()}
                  </li>
                );
              }
              return null;
            })}
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
