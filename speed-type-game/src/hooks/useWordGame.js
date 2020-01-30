import {useState, useEffect, useRef} from "react"

function useWordGame(startingTime = 5) {
  const [text, setText] = useState("");
  const [time, setTime] = useState(startingTime);
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
      setTime(startingTime)
      setFinalCount(0)
      setText("")
      inputRef.current.disabled = false
      inputRef.current.focus()
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
    }
  }, [time, isTimeRunning])

    return {inputRef, isTimeRunning, handleChange, text, time, startGame, finalCount}
}

export default useWordGame
