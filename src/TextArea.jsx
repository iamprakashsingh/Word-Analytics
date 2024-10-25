import { useState } from "react";

export default function TextArea() {
  const [text,setText] = useState("");
  return (
    <textarea className="textarea" value={text} onChange={(e)=>{
        const newText = e.target.value;
        setText(newText);

    }} placeholder="Enter text here" spellCheck="false"/>
  )
}
