// import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import Bulldog from "./components/Bulldog"
import PitBull from "./components/PitBull"

//CRUD 

function App() {

  const [number, setNumber] = useState(1)
  const [number1, setNumber1] = useState(1)
  const [number2, setNumber2] = useState(1)
  const [number3, setNumber3] = useState(1)

                              //[1, function(){...}]

  useEffect(() => {
    console.log("This loaded or changed")
  },[])

  useEffect(() => {
    console.log("This loaded or changed")
  },[number, number1])



  var getBulldogName = (event) =>{
    console.log(event)
    console.log("Button Is Working Yay!")
    var newNum = number + 1
    setNumber(newNum)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>whats up yall</h1>
        <PitBull name="kiki" breed="red heeler" age={7} favFood="poop" />
        <Bulldog />
        <PitBull name="runa" breed="pit" age={5} favFood="anything" />
      </header>

      <div>
        <h1>number is {number}</h1>
        <button
          className="form-control"
          onClick={e => getBulldogName(e)}
        >Add 1 to number</button>
      </div>
    </div>
  );
}

export default App;
