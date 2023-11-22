"use client";
import React, { useState, useEffect, useRef } from "react";
import "./mainlogic.css";


function AlagHai({ words, wordsNo,time,width }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputValuetwo, setInputValuetwo] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [typedIninputbox, setBoxtyped] = useState(0);
  const [accuracyF, setAccuracyF] = useState(0);
  const [wordsList, setText] = useState([]);
  const [wpmr,setwpmr]=useState(0)
  const [seconds, setSeconds] = useState(time*60);
  const [timeStart,setTimeStart]=useState(false)
  const inputRef = useRef(null);



  const regeneratrewords = () => {
    let paragraph = "";
    for (let i = 0; i < wordsNo; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + " ";
    }

    setText([paragraph]);
  };

  useEffect(() => {
    regeneratrewords();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();

      const currentWord = wordsList[currentWordIndex];

      if (wordsList[0].length == inputValue.length) {
        console.log("okkkk");
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

  //   console.log(inputValue.length)
  //   console.log(wordsList[0].length===inputValue.length)

  const handleAccuracy = () => {
    const t = typedIninputbox + errorCount;

    const accuracyFinal = (typedIninputbox / t) * 100;
    setAccuracyF(accuracyFinal.toFixed(1));
  };

const handleWpm=()=>{

if(inputValuetwo){
  const wpm=Math.round(inputValuetwo/1)
  setwpmr(wpm)
}else{
  const wp=Math.round(inputValue.split(" ").length/1)
  setwpmr(wp)
}


}
useEffect(()=>{
  if(inputValue||inputValuetwo){

    setTimeStart(true)
  }
},[inputValue,inputValuetwo])

useEffect(() => {

  if(timeStart){
  const interval = setInterval(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
      
    } else {
      clearInterval(interval);
      // Add any logic you want to execute when the timer reaches zero
      console.log('Timer reached zero!');
      handleWpm();
      handleAccuracy()


    }
  },1000);

  // Clear interval on component unmount to avoid memory leaks
  return () => clearInterval(interval);
  }

}, [seconds,timeStart,time]);


// margin: auto;
//     margin-top: 20px;
//     padding: 15px;
//     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//     font-size: 1.9em;
//   font-weight: bold;
//   background: #ffffff;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
//   border-radius: 10px;
//   letter-spacing: 2px;
//  font-variant: inherit;

  
 
  return (
    <div >
      <div>
        <div className={`m-[auto] mt-[20px] w-[95%] md:w-[${width}] p-[15px] text-[1.1em] md:text-[1.9em] font-bold bg-[#ffffff] rounded-[15px] shadow-lg `}>{renderParagraph()}</div>
        <div className="flex justify-center gap-[20px] ">
          {" "}
          <p className="text-[red]">Error count: {errorCount}</p>
          <p className="text-[red]">Timer: {seconds} </p>
          <p className="text-[red]">wpm: {wpmr} </p>
          <p className="text-[red] cursor-pointer " onClick={handleAccuracy}>
            Accuracy: {accuracyF} %
          </p>
        </div>

        <div className="absolute bottom-0 left-[-100px] w-[5px] border border-[red] h-[5px]">
          <textarea
            className=" w-[5px] border border-[red] h-[5px] "
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Start typing..."
          />
        </div>
      </div>
    </div>
  );
}

export default AlagHai;
