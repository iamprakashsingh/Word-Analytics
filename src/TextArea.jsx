import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text,setText] = useState("");
  const [warningText,setWarningText] = useState("");
  return (
    <>
    <textarea className="textarea" value={text} onChange={(e)=>{
        const newText = e.target.value;
        if(newText.includes('<script>')){
          setWarningText("Scripts are not allowed");
          return;
        }
        else if(newText.includes('@')){
          setWarningText("Special characters are not allowed");
          return;
        }
        setWarningText("");
        setText(newText);

    }} placeholder="Enter text here" spellCheck="false"/>
      <Warning warningText={warningText}/>
      </>
  )
}
