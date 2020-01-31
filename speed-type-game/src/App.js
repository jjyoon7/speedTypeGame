import React, {useState, useEffect} from "react"

function App() {
  const [text, setText] = useState("")
  const [time, setTime] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [word, setWord] = useState(0)


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

  function calculateWords(text) {
    const workdsArr = text.trim().split(" ")
    return workdsArr.length
  }

  function startGame() {
    setIsTimeRunning(true)
    setText("")
  }

  useEffect(() => {
    if(isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if(time === 0) {
      setIsTimeRunning(false)
      const wordCount = calculateWords(text)
      setWord(wordCount)
    }
  }, [isTimeRunning, time])

  return (
    <div>
      <h1>speed type game</h1>
      <textarea type="text" value={text} onChange={handleChange}/>
      <button onClick={startGame}>start</button>
      <h4>time remaining: {time}</h4>
      <h4>word count:{word}</h4>
    </div>
  )
}

export default App