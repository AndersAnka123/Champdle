import { useEffect, useState } from "react";
import "../Styles/Classic.css";

let ClassicGame = () => {
  let [Dropdown, IsDropdown] = useState(false);
  let [userinput, setUserInput] = useState("");
  const [data, setData] = useState([]);
  const [loadingm, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [randomChamp, setRandomChamp] = useState(null);

  function getChampions() {
    let url = "http://localhost:8000/getNewChamp";
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch(url);
        const result = await response.json();
        setData(result);
      };
      fetchData();
    }, [0]);
  }

  getChampions();

  // console.log(data);

  function GuessChamp(champ: any) {
    const searchName = champ; // The name you want to search for

    const foundCharacter: any = Object.entries(data[0]).find(
      ([name]) => name === searchName
    );

    let guessedChampList: any[];

    // console.log(foundCharacter);
    const GuessedChamp = {
      Icon: foundCharacter[1].icon,
      Gender: foundCharacter[1].gender,
      Positions: foundCharacter[1].roles,
      Species: foundCharacter[1].species,
      Resource: foundCharacter[1].resource,
      Range_Type: foundCharacter[1].rangeType,
      Regions: foundCharacter[1].region,
      releseYear: foundCharacter[1].releseYear,
    };
    guessedChampList.push(GuessedChamp);
    console.log(GuessedChamp);
  }

  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          type="text"
          className="champInput"
          onKeyUp={(e: any) => {
            setUserInput(e.target.value);

            if (userinput != null) IsDropdown(true);
            else IsDropdown(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              GuessChamp(userinput);
            }
          }}
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
            GuessChamp(userinput);
          }}
        >
          Guess
        </button>
        {Dropdown && (
          <ul className="champList">
            {Object.keys(data[0])
              .filter((item) =>
                item.toLowerCase().includes(userinput.toLowerCase())
              ) // Fix includes logic
              .map((item) => (
                <li
                  key={item}
                  className="champListItem"
                  onClick={() => GuessChamp(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>
      {guessedChampList && (
        <ul className="GuessedChamps">
          {guessedChampList.map((champ, index) => (
            <li key={index}>{index}</li>
          ))}
        </ul>
      )}
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
