import React, {userState} from "react";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);

  function setText() {
    userState(prevText => ({
      [value]: prevText
    }))
  };

  function setTime() {
    setInterval(() => {
      time - 1;
    }, 1000)
  }

  function handleStart() {
    setTime()
  }

  return (
    <main>
      <h1>speed type game</h1>
      <textarea value={text} onChange={setText}/>
      <h4>{time}</h4>
      <button onClick={handleStart}>start</button>
    </main>
  )
}

export default App
