import React from "react";
import useWordGame from "./hooks/useWordGame"

function App() {
  const {inputRef, isTimeRunning, handleChange, text, time, startGame, finalCount} = useWordGame(5)

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
