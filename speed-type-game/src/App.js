import React, {useState, useEffect} from "react"

function App() {
  const [text, setText] = useState("")
  const [time, setTime] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)


  //what needs to happen
  //calculate the words
  //display the word count
  //count down the time
  //when coutdown is done, you cannnot type
  //if the game did not start, you cannot type


  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }

  function startGame() {
    setIsTimeRunning(true)
  }

  useEffect(() => {
    if(isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if(isTimeRunning === 0) {
      setIsTimeRunning(false)
    }
  }, [isTimeRunning, time])

  return (
    <div>
      <h1>speed type game</h1>
      <textarea type="text" value={text} onChange={handleChange}/>
      <button onClick={startGame}>start</button>
      <h4>time remaining: {time}</h4>
    </div>
  )
}

export default App