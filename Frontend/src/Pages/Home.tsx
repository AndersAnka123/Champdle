import "../Styles/Homepage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let HomePage = () => {
  return (
    <main className="HomeContent">
      <div className="GameSections">
        <Link to="/classic" className="GameItemLink">
          <div className="GameItem">
            {/* <div className="GameIcon">?</div> */}
            <div className="GameTextWrapper">
              <h1 className="GameHeader">Classic</h1>
              <p className="GameDesc">Can you guess the champion?</p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
