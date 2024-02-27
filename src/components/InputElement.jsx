import React, { useState } from "react";

// const InputElement = ({ guesses, setGuesses }) => {
const InputElement = ({ addToGuesses }) => {
  const [allow, setAllow] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const newItem = (label) => {
    const guess = {
      label,
      id: crypto.randomUUID(),
    };
    return guess;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue.length < 5) {
      setAllow(false);
      return;
    }

    console.log({ inputValue });

    const addItem = newItem(inputValue);
    // setGuesses([...guesses, addItem]);
    addToGuesses(addItem);
    setAllow(true);
    setInputValue("");
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="inputText">ENTER THE GUESS</label>
        <input
          type="text"
          id="inputText"
          value={inputValue}
          // required={true}
          // minLength={5}
          maxLength={"5"}
          onChange={(e) => {
            setInputValue(e.target.value.toUpperCase());
          }}
        />
      </form>
      {inputValue}
      <h2>{!allow && "Minimum Five characters are required"}</h2>
    </>
  );
};

export default InputElement;
