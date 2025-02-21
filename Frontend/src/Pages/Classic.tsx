import { useState } from "react";
import "../Styles/Classic.css";

let ClassicGame = () => {
  let [Dropdown, IsDropdown] = useState(false);
  let [userinput, setUserInput] = useState("");

  let handleInputFocus = () => {
    IsDropdown(true);
  };

  let handleInputBlur = () => {
    IsDropdown(false);
  };

  function HandleUserInput(e: any) {
    setUserInput(e.target.value);
    console.log(userinput);
  }

  return (
    <div className="ClassicContent">
      <div className="inputWrapper">
        <input
          type="text"
          className="champInput"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={HandleUserInput}
        />
        <button className="GuessBtn">Guess</button>
        {Dropdown && (
          <ul className="champList">
            {dummyList.map((item: any, index: number) => {
              if (item.Name.includes(userinput)) {
                return (
                  <li key={index} className="listItem">
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
