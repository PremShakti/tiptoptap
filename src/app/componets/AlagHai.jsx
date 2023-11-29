"use client";
import React, { useState, useEffect, useRef } from "react";
import "./mainlogic.css";
import Keyboard from "./Keyboard";

function AlagHai({ words, wordsNo, time, width }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputValuetwo, setInputValuetwo] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [typedIninputbox, setBoxtyped] = useState(0);
  const [accuracyF, setAccuracyF] = useState(0);
  const [wordsList, setText] = useState([]);
  const [wpmr, setwpmr] = useState(0);
  const [seconds, setSeconds] = useState(time * 60);
  const [timeStart, setTimeStart] = useState(false);
  const inputRef = useRef(null);
  const [trueorfalse, setTrueorFalse] = useState();
  const [focousKey, setFocouskey] = useState();

  const regeneratrewords = () => {
    let paragraph = "";
    for (let i = 0; i < wordsNo; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + " ";
    }

    setText([paragraph]);

    setFocouskey(paragraph[0]);
  };

  useEffect(() => {
    regeneratrewords();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();

   
      const currentWord = wordsList[currentWordIndex];

      if (wordsList[0].length == inputValue.length) {
        setInputValuetwo((pre) => pre + inputValue.split(" ").length - 1);

        setInputValue("");
        regeneratrewords();
        renderParagraph();
        setErrorCount((pre) => pre - 1);
      }

      if (e.key !== "Shift") {
        if (currentWord && currentWord.startsWith(inputValue + e.key)) {
          setInputValue((prevValue) => prevValue + e.key);
          setBoxtyped((pre) => pre + 1);
          setTrueorFalse(true)
        
            setFocouskey(wordsList[0][inputValue.length + 1]);
          
        } else {
          setErrorCount((prevErrorCount) => prevErrorCount + 1);
         
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue, currentWordIndex, wordsList, setCurrentWordIndex]);

  useEffect(() => {
    inputRef.current.focus();
  }, [currentWordIndex]);

  const renderParagraph = () => {
    const paragraph = wordsList.map((word, index) => (
      <span key={index} style={{ display: "inline-block", marginRight: "8px" }}>
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            style={{
              color: getColor(charIndex, word),
              borderBottom: getBorder(charIndex, word),
            }}
          >
            {char}
          </span>
        ))}
        {index < wordsList.length - 1 && " "}
      </span>
    ));

    return paragraph;
  };

  const getColor = (index, word) => {
    if (index < inputValue.length) {
     
      return inputValue[index] === word[index] ? "#00FF4A" : "red";

    }
    return "black";
  };

  const getBorder = (index, word) => {
    
    return index === inputValue.length ? "4px solid blue" : "none";
  };

 

  const handleAccuracy = () => {
    const t = typedIninputbox + errorCount;

    const accuracyFinal = (typedIninputbox / t) * 100;
    setAccuracyF(accuracyFinal.toFixed(1));
  };

  const handleWpm = () => {
    if (inputValuetwo) {
      const wpm = Math.round(inputValuetwo / 1);
      setwpmr(wpm);
    } else {
      const wp = Math.round(inputValue.split(" ").length / 1);
      setwpmr(wp);
    }
  };
  useEffect(() => {
    if (inputValue || inputValuetwo) {
      setTimeStart(true);
    }
  }, [inputValue, inputValuetwo]);

  useEffect(() => {
    if (timeStart) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(interval);

          console.log("Timer reached zero!");
          handleWpm();
          handleAccuracy();
        }
      }, 1000);

      // Clear interval on component unmount to avoid memory leaks
      return () => clearInterval(interval);
    }
  }, [seconds, timeStart, time]);

 

  return (
    <div>
      {width ? (
        <div>
          <div
            className={` w-[50%] m-[auto] mt-[20px]  p-[15px] text-[1.1em] md:text-[1.9em] font-bold bg-[#ffffff] rounded-[15px] shadow-lg relative`}
          >
            {renderParagraph()}

            <textarea
              className="absolute p-[15px] top-0 left-0 opacity-0 w-[100%] border border-[red] h-[100%]"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Start typing..."
            />
          </div>
          <div className="flex justify-center gap-[20px] ">
            {" "}
            <p className="text-[red]">Error count: {errorCount}</p>
            <p className="text-[red]">Timer: {seconds} </p>
            <p className="text-[red]">wpm: {wpmr} </p>
            <p className="text-[red] cursor-pointer " onClick={handleAccuracy}>
              Accuracy: {accuracyF} %
            </p>
          </div>

          
        </div>
      ) : (
        <div>
          <div
            className={` w-[95%] m-[auto] mt-[20px]  p-[15px] text-[1.1em] md:text-[1.9em] font-bold bg-[#ffffff] rounded-[15px] shadow-lg relative`}
          >
            {renderParagraph()}

            <textarea
              className="absolute p-[15px] top-0 left-0 opacity-0 w-[100%] border border-[red] h-[100%]"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Start typing..."
            />
          </div>
          <div className="flex justify-center gap-[20px] ">
            {" "}
            <p className="text-[red]">Error count: {errorCount}</p>
            <p className="text-[red]">Timer: {seconds} </p>
            <p className="text-[red]">wpm: {wpmr} </p>
            <p className="text-[red] cursor-pointer " onClick={handleAccuracy}>
              Accuracy: {accuracyF} %
            </p>
          </div>

          
        </div>
      )}
      <div className="hidden md:block">
        <Keyboard focousKey={focousKey} />
      </div>
    </div>
  );
}

export default AlagHai;
