import { useEffect, useState } from "react";
import "../Styles/Classic.css";

let ClassicGame = () => {
  let [Dropdown, IsDropdown] = useState(false);
  let [userinput, setUserInput] = useState("");
  let [guessedChamp, setGuessedChamp] = useState("");
  let [selectedChamp, setSelectedChamp] = useState("");
  const [data, setData] = useState([]);
  const [loadingm, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [randomChamp, setRandomChamp] = useState(null);

  function getRandomChamp() {
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

  console.log(data);
  // Example usage
  getRandomChamp();
  // let url = "http://localhost:8000/getNewChamp";
  // useEffect(() => {
  //   let fetchData = async () => {
  //     setloading(true);
  //     let response = await fetch(url);
  //     const result = await response.json();
  //     setData(result);
  //   };
  //   fetchData();
  // }, [0]);

  // console.log(data);

  function HandleUserInput(e: any) {
    setUserInput(e.target.value);

    if (userinput != null) IsDropdown(true);
    else IsDropdown(false);
    console.log(userinput);
  }

  function GuessChamp(champ: any) {
    alert(champ);
    return <li>test</li>;
  }
  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          type="text"
          className="champInput"
          onKeyUp={HandleUserInput}
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
      <ul className="GuessedChamps">{<GuessChamp />}</ul>
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
    img: "https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/Kalista.png",
  },
];
