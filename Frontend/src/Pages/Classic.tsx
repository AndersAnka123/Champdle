import { useState } from "react";
import "../Styles/Classic.css";
import getRandomChamp from "../Hooks/GetRandomChamp";

let ClassicGame = () => {
  let [Dropdown, IsDropdown] = useState(false);
  let [userinput, setUserInput] = useState();
  let [AutoFill, setAutoFill] = useState("");

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
          onKeyDown={HandleUserInput}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              GuessChamp();
            }
          }}
          onBlur={() => {
            setTimeout(() => {
              IsDropdown(false);
            }, 200);
          }}
          placeholder="Enter champ"
        />
        <button className="GuessBtn" onClick={GuessChamp}>
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
                      setAutoFill(item.Name);
                      GuessChamp();
                    }}
                  >
                    {item.Name}
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
    Name: "Kallista",
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
