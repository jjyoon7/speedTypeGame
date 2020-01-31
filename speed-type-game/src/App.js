import React, {useState, useEffect, useRef} from "react"

function App() {
  const [text, setText] = useState("")
  const [time, setTime] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [word, setWord] = useState(0)
  const textRef = useRef(null)


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
    return workdsArr.filter(word => word !== "").length
  }

  function startGame() {
    setIsTimeRunning(true)
    setText("")
    setTime(5)
    setWord(0)
    textRef.current.disabled = false
    textRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    const wordCount = calculateWords(text)
    setWord(wordCount)
    textRef.current.disabled = true
  }

  useEffect(() => {
    if(isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if(time === 0) {
      endGame()
    }
  }, [isTimeRunning, time])

  return (
    <div>
      <h1>speed type game</h1>
      <textarea ref={textRef} disabled={true} type="text" value={text} onChange={handleChange}/>
      <button onClick={startGame} disabled={isTimeRunning}>start</button>
      <h4>time remaining: {time}</h4>
      <h4>word count:{word}</h4>
    </div>
  )
}

export default App