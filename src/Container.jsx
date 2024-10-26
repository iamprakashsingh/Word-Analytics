import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_LIMIT, INSGRAM_LIMIT } from "./constants";

export default function Container() {
  const [text,setText] = useState("");
  
  let wordCount = function countWords(text) {
    // Check if text is empty, if so, return 0
    if (text.trim() === "") return 0;
    
    // Otherwise, split by spaces and count non-empty words
    const words = text.match(/\b\w+\b/g);
    return words.length;
  };
  const stats = {
    textLen: text.length,
    wordCount: wordCount(text),
    instaCharLeft: INSGRAM_LIMIT - text.length,
    fbCharLeft: FACEBOOK_LIMIT - text.length
  }
  return (
    <main className="container">
        <TextArea text={text} setText={setText}/>
        <Stats stats={stats}/>
    </main>
  )
}
