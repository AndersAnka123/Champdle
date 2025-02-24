import { useState } from "react";
import "../Styles/Classic.css";
import getRandomChamp from "../Hooks/GetRandomChamp";

let ClassicGame = () => {
  let [Dropdown, IsDropdown] = useState(false);
  let [userinput, setUserInput] = useState();

  function HandleUserInput(e: any) {
    setUserInput(e.target.value);

    if (userinput != null) IsDropdown(true);
    else IsDropdown(false);
    console.log(userinput);
  }

  function GuessChamp() {
    console.log(getRandomChamp);
  }
  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          type="text"
          className="champInput"
          onChange={HandleUserInput}
          onBlur={() => {
            setTimeout(() => {
              IsDropdown(false);
            }, 200);
          }}
          placeholder="Enter champ"
        />
        <button className="GuessBtn">Guess</button>
        {Dropdown && (
          <ul className="champList">
            {dummyList.map((item: any, index: number) => {
              if (item.Name.includes(userinput)) {
                return (
                  <li key={index} className="listItem" onClick={GuessChamp}>
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
    img: "Test",
  },
  {
    Name: "Vayne",
    img: "Test",
  },
  {
    Name: "Bard",
    img: "Test",
  },
  {
    Name: "Brand",
    img: "Test",
  },
  {
    Name: "Rek sai",
    img: "Test",
  },
];
