import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [number, setnumber] = useState(0);
  const [message, setmessage] = useState("");

  function DateOfBirthHandler(event) {
    setDateOfBirth(event.target.value);
  }

  function luckyNumberHandler(event) {
    setnumber(event.target.value);
  }

  function CalculateLuckyNumber() {
    let dateString = dateOfBirth;

    var dateSum = 0;
    for (let i = 0; i < dateString.length; i++) {
      if (dateString[i] !== "-") {
        dateSum += parseInt(dateString[i]);
        console.log(dateString[i]);
      }
    }
    console.log(dateString, dateSum);

    if (dateSum % number === 0) {
      setmessage("Congratulations!!!, Your Birthday Is lucky 🎊🎊 ");
    } else {
      setmessage("Your Birthday is not lucky :(");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">IS YOUR BIRTHDAY LUCKY?</p>
        <p className="watermark">Made with love by: Parth 💖 </p>
      </header>
      <main className="main__body">
        <div className="date__input input">
          <p className="date__label">Enter Your Date Of Birth:</p>
          <input onChange={DateOfBirthHandler} type="date" name="" id="" />
        </div>
        <div className="lucky__number__input input">
          <p className="lucky__number__label">Enter your Lucky Number:</p>
          <input onChange={luckyNumberHandler} type="number" name="" id="" />
        </div>
        <button onClick={CalculateLuckyNumber} className="check__button">
          Check Lucky Number
        </button>

        <div className="output__div">
          <p className="message">{message}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
