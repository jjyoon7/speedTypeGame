import React, {useState, useEffect, useRef} from "react";

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("");
  const [time, setTime] = useState(STARTING_TIME);
  const [isTimeRunning, setTimeRunning] = useState(false)
  const [finalCount, setFinalCount] = useState(0)
  const inputRef = useRef(null);

  function handleChange(event) {
    const {value} = event.target;
    setText(value)
  };

  function calculateWordCount(words) {
    const wordsArr = words.trim().split(" ");
    const wordsCount = wordsArr.filter(word => word !== "").length;
    return wordsCount;
  }

  function startGame() {
      setTimeRunning(true)
      setTime(STARTING_TIME)
      setFinalCount(0)
      setText("")
      inputRef.current.disabled = false
      inputRef.current.focus()
      console.log(inputRef)
  }

  function endGame() {
      setTimeRunning(false)
      setFinalCount(calculateWordCount(text))
  }
  useEffect(() => {
    if(isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if(time === 0){
      endGame()
      // return () => clearTimeout(timer)
    }
  }, [time, isTimeRunning])

  return (
    <main>
      <h1>speed type game</h1>
      <textarea ref={inputRef} disabled={!isTimeRunning} onChange={handleChange} value={text}/>
      <h4>time remaining: {time}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>start</button>
      <h1>word count: {finalCount}</h1>
    </main>
  )
}

export default App
