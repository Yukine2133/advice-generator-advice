import { useState, useEffect } from "react";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();

    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <main className="container">
        <h1>Advice #{text.id}</h1>
        <p>{text.advice}</p>

        <picture>
          <source media="(min-width: 768px )" srcSet={pauseDesktop} />
          <img src={pauseMobile} />
        </picture>

        <div>
          <button onClick={fetchAdvice}>
            <img src={dice} />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
