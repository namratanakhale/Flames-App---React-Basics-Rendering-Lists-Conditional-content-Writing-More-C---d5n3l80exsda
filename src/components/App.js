import React, { Component, useState } from "react";
import "../styles/App.css";

const relations = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [answer, setAnswer] = useState("");

  //
  const calculateRelationshipStatus = () => {
    if (firstName === "" || secondName === "") {
      setAnswer("Please Enter valid input");
      return;
    }
    let firstNameArray = firstName.split("");
    let secondNameArray = secondName.split("");
    let matchLetterCount = 0;
    for (let index = 0; index < firstNameArray.length; index++) {
      const element = firstNameArray[index];
      if (secondNameArray.includes(element)) matchLetterCount += 2;
    }
    const arrayIndex = Math.floor(
      (firstNameArray.length + secondNameArray.length - matchLetterCount) % 6
    );
    setAnswer(relations[arrayIndex]);
  };

  const resetApp = () => {
    setFirstName("");
    setSecondName("");
    setAnswer("");
  };

  return (
    <div id="main">
      <div className="result">
        Your Relationship Status:
        <h3 data-testid={"answer"}>{answer}</h3>
      </div>
      <div className="input">
        <input
          data-testid={"input1"}
          type={"text"}
          placeholder={"First Name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          data-testid={"input2"}
          type={"text"}
          placeholder={"Second Name"}
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button
          data-testid={"calculate_relationship"}
          onClick={calculateRelationshipStatus}
        >
          Calculate Relationship Future
        </button>
        <button data-testid={"clear"} onClick={resetApp}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;