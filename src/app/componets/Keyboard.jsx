import React, { useEffect, useState } from "react";
import "./mainlogic.css";
const Keyboard = ({ focousKey }) => {
 

const obj={
  border:"1px solid black",
  borderBottom:"3px solid black"
}

  return (
    <>
      <div className="keyboard">
        <div className="keyboard__row">
          <div className="key--double greay sameclass" data-key="192" style={focousKey=="`"||focousKey=="~"?obj:null}>
            <div>`</div>
          </div>
          <div className="key--double purple sameclass" data-key="49" style={focousKey=="1"||focousKey=="!"?obj:null}>
            <div>1</div>
          </div>
          <div className="key--double purple sameclass" data-key="50" style={focousKey=="2"||focousKey=="@"?obj:null}>
            <div>2</div>
          </div>
          <div className="key--double grann sameclass" data-key="51" style={focousKey=="3"||focousKey=="#"?obj:null}>
            <div>3</div>
          </div>
          <div className="key--double rad sameclass" data-key="52"style={focousKey=="4"||focousKey=="$"?obj:null}>
            <div>4</div>
          </div>
          <div className="key--double blu sameclass" data-key="53"style={focousKey=="5"||focousKey=="%"?obj:null}>
            <div>5</div>
          </div>
          <div className="key--double blu sameclass" data-key="54"style={focousKey=="6"||focousKey=="^"?obj:null}>
            <div>6</div>
          </div>
          <div className="key--double yallo sameclass" data-key="55" style={focousKey=="7"||focousKey=="&"?obj:null}>
            <div>7</div>
          </div>
          <div className="key--double pinkk sameclass" data-key="56"style={focousKey=="8"||focousKey=="*"?obj:null}>
            <div>8</div>
          </div>
          <div className="key--double orangee sameclass" data-key="57"style={focousKey=="9"||focousKey=="("?obj:null}>
            <div>9</div>
          </div>
          <div className="key--double greenn2 sameclass" data-key="48"style={focousKey=="0"||focousKey==")"?obj:null}>
            <div>0</div>
          </div>
          <div className="key--double greenn2 sameclass" data-key="189"style={focousKey=="-"||focousKey=="_"?obj:null}>
            <div>-</div>
          </div>
          <div className="key--double greenn2 sameclass" data-key="187"style={focousKey=="="||focousKey=="+"?obj:null}>
            <div>=</div>
          </div>
          <div
            className="key--bottom-right key--word key--w4 greay sameclass"
            data-key="8"
          >
            <span>delete</span>
          </div>
        </div>
        <div className="keyboard__row">
          <div
            className="key--bottom-left key--word key--w4 greay sameclass"
            data-key="9"
          >
            <span>tab</span>
          </div>
          <div className="key--letter purple sameclass" data-char="Q"style={focousKey=="q"||focousKey=="Q"?obj:null} >
            Q
          </div>
          <div className="key--letter grann sameclass" data-char="W"style={focousKey=="w"||focousKey=="W"?obj:null}>
            W
          </div>
          <div className="key--letter rad sameclass" data-char="E"style={focousKey=="e"||focousKey=="E"?obj:null}>
            E
          </div>
          <div className="key--letter blu sameclass" data-char="R"style={focousKey=="r"||focousKey=="R"?obj:null}>
            R
          </div>
          <div className="key--letter blu sameclass" data-char="T"style={focousKey=="t"||focousKey=="T"?obj:null}>
            T
          </div>
          <div className="key--letter yallo sameclass" data-char="Y"style={focousKey=="y"||focousKey=="Y"?obj:null}>
            Y
          </div>
          <div className="key--letter yallo sameclass" data-char="U"style={focousKey=="u"||focousKey=="U"?obj:null}>
            U
          </div>
          <div className="key--letter pinkk sameclass" data-char="I"style={focousKey=="i"||focousKey=="I"?obj:null}>
            I
          </div>
          <div className="key--letter orangee sameclass" data-char="O"style={focousKey=="o"||focousKey=="O"?obj:null}>
            O
          </div>
          <div className="key--letter greenn2 sameclass" data-char="P"style={focousKey=="p"||focousKey=="P"?obj:null}>
            P
          </div>
          <div
            className="key--double greenn2 sameclass"
            data-key="219"
            data-char="{["
            style={focousKey=="["||focousKey=="{"?obj:null}
          >
            <div>{"["}</div>
          </div>
          <div
            className="key--double greenn2 sameclass"
            data-key="221"
            data-char="}]"
            style={focousKey=="]"||focousKey=="}"?obj:null}
          >
            <div>{"]"}</div>
          </div>
          <div
            className="key--double greay sameclass"
            data-key="220"
            data-char="|\"
            style={focousKey=="\\"||focousKey=="|"?obj:null}
          >
            <div>\</div>
          </div>
        </div>
        <div className="keyboard__row">
          <div
            className="key--bottom-left key--word key--w5 greay"
            data-key="20"
          >
            <span>caps lock</span>
          </div>
          <div
            className="key--letter purple sameclass"
            data-char="A"
            style={focousKey=="a"||focousKey=="A"?obj:null}
          >
            A
          </div>
          <div className="key--letter grann sameclass" data-char="S" style={focousKey=="s"||focousKey=="S"?obj:null}>
            S
          </div>
          <div className="key--letter rad sameclass" data-char="D" style={focousKey=="d"||focousKey=="D"?obj:null}>
            D
          </div>
          <div className="key--letter blu sameclass" data-char="F" style={focousKey=="f"||focousKey=="F"?obj:null}>
            F
          </div>
          <div className="key--letter blu sameclass" data-char="G" style={focousKey=="g"||focousKey=="G"?obj:null}>
            G
          </div>
          <div className="key--letter yallo sameclass" data-char="H" style={focousKey=="h"||focousKey=="H"?obj:null}>
            H
          </div>
          <div className="key--letter yallo sameclass" data-char="J" style={focousKey=="j"||focousKey=="J"?obj:null}>
            J
          </div>
          <div className="key--letter pinkk sameclass" data-char="K" style={focousKey=="k"||focousKey=="K"?obj:null}>
            K
          </div>
          <div className="key--letter orangee sameclass" data-char="L" style={focousKey=="l"||focousKey=="L"?obj:null}>
            L
          </div>
          <div className="key--double greenn2 sameclass" data-key="186" style={focousKey==";"||focousKey==":"?obj:null}>
            <div>;</div>
          </div>
          <div className="key--double greenn2 sameclass" data-key="222" style={focousKey=="'"||focousKey=='""'?obj:null}>
            <div>"</div>
          </div>
          <div
            className="key--bottom-right key--word key--w5 greay"
            data-key="13"
          >
            <span>return</span>
          </div>
        </div>
        <div className="keyboard__row">
          <div
            className="key--bottom-left key--word key--w6 greay"
            data-key="16"
          >
            <span>shift</span>
          </div>
          <div className="key--letter purple sameclass" data-char="Z"style={focousKey=="z"||focousKey=="Z"?obj:null}>
            Z
          </div>
          <div className="key--letter grann sameclass" data-char="X"style={focousKey=="x"||focousKey=="X"?obj:null}>
            X
          </div>
          <div className="key--letter rad sameclass" data-char="C"style={focousKey=="c"||focousKey=="C"?obj:null}>
            C
          </div>
          <div className="key--letter blu sameclass" data-char="V"style={focousKey=="v"||focousKey=="V"?obj:null}>
            V
          </div>
          <div
            className="key--letter blu sameclass"
            data-char="B"
            style={focousKey=="b"||focousKey=="B"?obj:null}
            
          >
            B
          </div>
          <div className="key--letter yallo sameclass" data-char="N"style={focousKey=="n"||focousKey=="N"?obj:null}>
            N
          </div>
          <div className="key--letter yallo sameclass" data-char="M"style={focousKey=="m"||focousKey=="M"?obj:null}>
            M
          </div>
          <div className="key--double pinkk sameclass" data-key="188"style={focousKey==","||focousKey=="<"?obj:null}>
            <div>,</div>
          </div>
          <div className="key--double orangee sameclass" data-key="190"style={focousKey=="."||focousKey==">"?obj:null}>
            <div>.</div>
          </div>
          <div className="key--double greenn2 sameclass" data-key="191"style={focousKey=="/"||focousKey=="?"?obj:null}>
            <div>/</div>
          </div>
          <div
            className="key--bottom-right key--word key--w6 greay"
            data-key="16-R"
          >
            <span>shift</span>
          </div>
        </div>
        <div className="keyboard__row keyboard__row--h3">
          <div className="key--bottom-left key--word">
            <span></span>
          </div>
          <div className="key--bottom-left key--word key--w1" data-key="17">
            <span></span>
          </div>
          <div className="key--bottom-left key--word key--w1" data-key="18">
            <span></span>
          </div>
          <div className="key--bottom-right key--word key--w3" data-key="91">
            <span></span>
          </div>
          <div
            className="key--double key--right key--space "
            data-key="32"
            data-char=" "
            style={focousKey==" "||focousKey==" "?obj:null}
          >
            <span>space</span>
          </div>
          <div className="key--bottom-left key--word key--w3" data-key="93-R">
            <span></span>
          </div>
          <div className="key--bottom-left key--word key--w1" data-key="18-R">
            <span></span>
          </div>
          <div data-key="37" className="key--arrow">
            <span></span>
          </div>
          <div className="key--double key--arrow--tall" data-key="38">
            <div></div>
            <div></div>
          </div>
          <div data-key="39" className="key--arrow">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
