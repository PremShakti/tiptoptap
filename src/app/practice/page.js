"use client"
import React, { useState } from 'react'
import TypingTest from '../componets/TypingTest'
import AlagHai from '../componets/AlagHai';

const Resule = () => {
  const [words, setWords] = useState([
   "aaa","sss","ddd","jjj","kkk","lll"]);
  const [time,setTime]=useState(60);

  return (
    <div>
       <AlagHai words={words}  wordsNo={3}/>


    </div>
  )
}

export default Resule
