"use client";
import React, { useEffect, useState } from "react";
import AlagHai from "../componets/AlagHai";

// const wordsList = ['React lle nge'];

const Alag = () => {
  const [words, SetTexts] = useState(["aaA", "ssS", "ddd", "fff"]);

  return (
    <div>
      <AlagHai words={words} wordsNo={5} />
    </div>
  );
};

export default Alag;
