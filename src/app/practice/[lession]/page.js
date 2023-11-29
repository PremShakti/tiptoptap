"use client"
import React, { useEffect, useState } from 'react'



import AlagHai from '@/app/componets/AlagHai';

const Resule = ({params}) => {
  // const [words, setWords] = useState([]);
  // const [time,setTime]=useState(60);




const sswords=()=>{
  if(params.lession=="1"){
   return ["asd","asd","gh","jkl"]
  }else if(params.lession=="2"){
    return ["ajsk","jakd","hgas;","lkds;","ghfak","salj;","fhkla","lkag';","hgkla';","dhla","kdsl;"]

  }else if(params.lession=="3"){
    return ["ajskt","jaedoe","heoas;","lkdsoe;","ghfak","stilj;","fhkla","lkagti","hgkla","dhitl","kdsoel"]
  }else if(params.lession=="4"){
    return ["nrjskt","haedoe","hceoas;","lkdsoe;","ghcfak","chtrnilj;","ehknrla","lkagti","hceoit","dhnritl","kdsoel","nrhceo"]
  }else if(params.lession=="5"){
    return ["nrJwkt","Haedoe","hceoAs;","lkwsoe;","Gwcfak","chtRniwj;","eYknrla","lkwygti","hceoit","dhqritl","kdsoel","nrhcyeo","wWyYrR"]
  }else{
    return ["nrJwkt","Haedoe","hceoAs;","lkwsoe;","Gwcfak","chtRniwj;","eYknrla","lkwygti","hceoit","dhqritl","kdsoel","nrhcyeo","wWyYrR"]
  }

}



  return (
    <div>
       <AlagHai words={sswords()}  wordsNo={18} time={1} width={false} />
    </div>
  )
}

export default Resule
