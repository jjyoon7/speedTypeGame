import React, {useState, useEffect} from "react";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(10);

  function handleChange(event) {
    const {value} = event.target;
    setText(value)
  };

  function calculateWordCount(words) {
    const wordsArr = words.trim().split(" ");
    const wordsCount = wordsArr.filter(word => word !== "").length;
    return wordsCount;
  }

  useEffect(() => {
    let timer;
    if(time > 0) {
      let timer = setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    } else {
      return () => clearTimeout(timer)
    }
  }, [time])
  // function setTime() {
  //   setInterval(() => {
  //     time - 1;
  //   }, 1000)
  // }

  // function handleStart() {
  //   setTime()
  // }

  return (
    <main>
      <h1>speed type game</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>time remaining: {time}</h4>
      <button onClick={() => console.log(calculateWordCount(text))}>start</button>
      {/* <h1>word count {wordsCount}</h1> */}
    </main>
  )
}

export default App
