"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


export default function TypingTest({ words,wordsNo }) {
  const [text, setText] = useState();
  const routerr = useRouter();
  // const [words, setWords] = useState([]);
  // const [ok,setok]=useState(false);
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const [startTime, setStartTime] = useState(null);
  // const [endTime, setEndTime] = useState(null);
  const [errors, setErrors] = useState(0);
  // const [timeRemaining, setTimeRemaining] = useState(60);

  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [btn, srtBtn] = useState(false);
  const [accuracy, Setaccuracy] = useState(null);
  const [totalLater, setTotallater] = useState();

  const regeneratrewords = () => {
    let paragraph = "";
    for (let i = 0; i < wordsNo; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + " ";
    }
    setText(paragraph);
  };

  useEffect(() => {
    regeneratrewords();
  }, [words]);

  // useEffect(()=>{

  // },[text,typedText])

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (seconds === 0) {
      setIsLocked(true);
    }
  }, [seconds]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      event.preventDefault();
    }
  };

  const handleChange = (e) => {
    const typedValue = e.target.value;
    
    setTypedText(typedValue);
    setTypedText2(typedValue);
    console.log(typedText)
    console.log(typedText2)

    if (!startTime) {
      setStartTime(Date.now());
    }

    let currentErrors = 0;

    for (let i = 0; i < typedValue.length; i++) {
      if (typedValue[i] !== text[i]) {
        currentErrors++;
      }
    }

    setErrors(currentErrors);

    // if (typedValue === text) {
    //   setEndTime(Date.now());
    // }
    if (typedValue.length == text.length) {
      setTypedText2("");
      regeneratrewords();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 8 && !inputFocused) {
        event.preventDefault();
      } else if (event.keyCode === 32 && !inputFocused) {
        inputRef.current.focus();
        setInputFocused(true);
        event.preventDefault();
        srtBtn(true);
        setIsActive(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputFocused]);

  useEffect(() => {
    let wt = typedText.replace(/\s/g, "").length - errors;
    let t = typedText.replace(/\s/g, "").length;
    let r = wt / t;
    let a = (r * 100).toFixed(1);
    Setaccuracy(a);
    setTotallater(typedText.replace(/\s/g, "").length);
  }, [errors, typedText]);

  return (
    <div  >
      {isLocked ? (
        <ShiningEffect laters={totalLater} errors={errors} acuracy={accuracy} speed={typedText.split(" ").length} />
      ) : (
        <div className="absolute bottom-0 left-0">
          <CountdownCircleTimer
            isPlaying={btn}
            duration={60}
            colors={["#61ff41", "#1c20ff", "#b90606", "#ff0000"]}
            colorsTime={[15, 15, 5, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      )}

      <div className="paraTag">
        <p>
          {text?.split("").map((char, index) => (
            <span
              key={index}
              style={{
                color:
                  typedText[index] === char
                    ? "green"
                    : typedText[index]
                    ? "red"
                    : "black",
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      <div className="inputMaindiv">
        {isLocked ? (
          <input type="text" readOnly />
        ) : (
          <input
            type="text"
            value={typedText2}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        )}
      </div>
    </div>
  );
}
