import "../Styles/Homepage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let HomePage = () => {
  return (
    <main className="HomeContent">
      <div className="GameSections">
        <Link to="/Classic">
          <div className="GameItem">
            <img
              src="https://loldle.net/img/ButtonClassicEmpty.7359c354.webp"
              alt=""
            />
            <div className="GameTextWrapper">
              <h1 className="GameHeader">Classic</h1>
              <p className="GameDesc">Get clues on every guess!</p>
            </div>
          </div>
        </Link>

        <Link to="/Quote">
          <div className="GameItem">
            <img
              src="https://loldle.net/img/ButtonQuoteEmpty.a222abf7.webp"
              alt=""
            />
            <div className="GameTextWrapper">
              <h1 className="GameHeader">Quote</h1>
              <p className="GameDesc">Guess it with in-game quotes</p>
            </div>
          </div>
        </Link>

        <Link to="/Ability">
          <div className="GameItem">
            <img
              src="https://loldle.net/img/ButtonAbilityEmpty.e619ab4a.webp"
              alt=""
            />
            <div className="GameTextWrapper">
              <h1 className="GameHeader">Ability</h1>
              <p className="GameDesc">One ability, one champion to find</p>
            </div>
          </div>
        </Link>

        <Link to="/Emoji">
          <div className="GameItem">
            <img
              src="https://loldle.net/img/ButtonEmojiEmpty.f9ae3513.webp"
              alt=""
            />
            <div className="GameTextWrapper">
              <h1 className="GameHeader">Emoji</h1>
              <p className="GameDesc">Guess with a set of emojis</p>
            </div>
          </div>
        </Link>

        <Link to="/Splash">
          <div className="GameItem">
            <img
              src="https://loldle.net/img/ButtonSplashEmpty.f54308f1.webp"
              alt=""
            />
            <div className="GameTextWrapper">
              <h1 className="GameHeader">Splash</h1>
              <p className="GameDesc">Guess from an image section</p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
