import React, { useState } from "react";
import Page from "./page"; 
import "./App.css";
import cat1 from "./images/bombacat.png";
import cat2 from "./images/bshcat.png";
import cat3 from "./images/calicat.png";
import cat4 from "./images/ragcat.png";
import logo from "./images/purrrlogo.png";

const catImages = [cat1, cat2, cat3, cat4];

const App: React.FC = () => {
  const [showPage, setShowPage] = useState(false);

  const handleStartButtonClick = () => {
    setShowPage(true);
  };

  const handleTitleClick = () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(createCatImage, i * 200); 
    }
  };

  const createCatImage = () => {
    const cat = document.createElement("img");
    const randomCatImage = catImages[Math.floor(Math.random() * catImages.length)];
    cat.src = randomCatImage;
    cat.className = "falling-cat";
    cat.style.left = Math.random() * window.innerWidth + "px";
    cat.style.animationDuration = `${Math.random() * 3 + 2}s`; 
    document.body.appendChild(cat);

    setTimeout(() => {
      cat.remove();
    }, 5000);
  };

  return (
    <div className="Meow">
      {!showPage ? (
        <>
        <div className="h1box">
          <img src={logo} className="logo" onClick={handleTitleClick}></img>
        </div>
          <button className="start-button" onClick={handleStartButtonClick}>
            Start Quiz
          </button>

          <footer className="footer">
            <p>art & code by: <a href="https://www.olaurel.dev/" style={{ color: "#ffffff" }}>@livlaurel</a></p>
            <p>feedback welcome!</p>
          </footer>
        </>
      ) : (
        <Page />
      )}
    </div>
  );
};

export default App;
