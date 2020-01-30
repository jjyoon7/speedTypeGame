import React, {useState} from "react";

function App() {
  const [text, setText] = useState("");
  // const [time, setTime] = useState(0);

  function handleChange(event) {
    const {value} = event.target;
    setText(value)
  };


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
      {/* <h4>{time}</h4>
      <button onClick={handleStart}>start</button>
      <h1>word count {wordcount}</h1> */}
    </main>
  )
}

export default App
