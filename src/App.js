import "./styles.css";
import { useState } from "react";
import Lottie from "react-lottie";
import party from "./lotties/party.json";
import happyFace from "./lotties/happy-face.json";
import sadFace from "./lotties/sad-emoji.json";

export default function App() {
  const [birthDate, setBirthDate] = useState("");
  const [luckyNo, setLuckyNo] = useState("");
  const [result, setResult] = useState("");
  const [focus, setFocus] = useState("text");
  const [showOutput, setShowOutput] = useState("none");
  const [showInput, setShowInput] = useState("block");

  const dateHandler = (e) => {
    setBirthDate(e.target.value);
  };
  const noHandler = (e) => {
    setLuckyNo(e.target.value);
  };

  const focusHandler = () => {
    setFocus("date");
  };
  const blurHandler = () => {
    setFocus("text");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const dateArray = birthDate.split("-");
    let sum = 0;
    dateArray.forEach((x) => {
      for (let i = 0; i < x.length; i++) {
        sum = sum + Number(x[i]);
      }
    });
    if (sum % Number(luckyNo) === 0) {
      setResult("lucky");
    } else {
      setResult("unlucky");
    }
    setShowOutput("block");
    setShowInput("none");
  };
  const resetHandler = () => {
    setShowInput("block");
    setShowOutput("none");
  };
  const partyDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: party,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const happyDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: happyFace,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const sadDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sadFace,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="App">
      <div className="hero">
        <Lottie options={partyDefaultOptions} height={300} width={400} />
      </div>
      <h1>Lucky Birthday Finder</h1>
      <div className="container" style={{ display: showInput }}>
        <form onSubmit={submitHandler}>
          <input
            type={focus}
            id="dob"
            required
            onFocus={focusHandler}
            onBlur={blurHandler}
            placeholder="Enter your birth date"
            onChange={dateHandler}
            value={birthDate}
          />
          <input
            type="number"
            min="1"
            step="1"
            id="lucky-number"
            required
            placeholder="Enter your lucky number"
            onChange={noHandler}
            value={luckyNo}
          />
          <button className="check-btn" type="submit">
            Check
          </button>
        </form>
      </div>
      {result === "lucky" ? (
        <div className="output" style={{ display: showOutput }}>
          <Lottie
            options={happyDefaultOptions}
            height={110}
            width={110}
            id="happy-lottie"
          />
          <span>Hooray! You are a lucky person.</span>
          <button className="check-btn" onClick={resetHandler}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="output" style={{ display: showOutput }}>
          <Lottie options={sadDefaultOptions} height={110} width={130} />
          Oops! Your Birthday is not lucky :(
          <button className="check-btn" onClick={resetHandler}>
            Play Again
          </button>
        </div>
      )}
      <div className="footer">
        <p className="name">
          Developed by{" "}
          <a href="https://hardikarora.netlify.app/" className="pp">
            Hardik Arora
          </a>
        </p>
        <ul className="socials">
          <li className="social-links">
            {" "}
            <a
              href="https://github.com/hardikarora2311"
              className="social-link"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
          <li className="social-links">
            <a href="https://twitter.com/HardikA2311_" className="social-link">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </li>
          <li className="social-links">
            <a
              href="https://www.linkedin.com/in/hardika2311/"
              className="social-link"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
