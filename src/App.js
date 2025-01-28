// import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import Bulldog from "./components/Bulldog"
import PitBull from "./components/PitBull"
import AllDogs from "./components/AllDogs"
import Home from "./components/Home"
import HomepageOne from "./pages/homepage/Homepage"
import {shoeBrands, callAPI} from "./utils/names"
import {BrowserRouter as Router, Route, Routes} from "react-router"


//CRUD 

function App() {

  const [number, setNumber] = useState(1)//2
  const [number1, setNumber1] = useState(1)
  const [number2, setNumber2] = useState(1)
  const [number3, setNumber3] = useState(1)
  const [nameBulldog, setNameBulldog] = useState("RUNA")

                              //[1, function(){...}]

  useEffect(() => {
    console.log("This loaded or changed")
  },[])

  useEffect(() => {
    console.log("This loaded or changed")
  },[number, number1])

  var getBulldogName = (event) =>{
    console.log(event)
    var newNum = number + 1
    //3
    setNumber(newNum)
  }

//https://www.rei.com/product/234941/rei-co-op-midweight-base-layer-crew-top-kids
//https://www.rei.com/product/236387/jones-dream-weaver-snowboard-womens-20242025

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/dogs" element={<Bulldog />} />
        <Route path="/dogs/pitbulls/runa" element={<PitBull names={{"runa":{name:"Runa", age:4, breed:"pit"},"kiki":{name:"kiki", age:2, breed:"heeler"}}}/>} />
        <Route path="/alldogs" element={<AllDogs />} />
        <Route path="/product/:id/:pname" element={<HomepageOne />} />
        <Route path="/" element={<Home />} />
          {/* <Route to="/dogs">
            <Bulldog />
          </Route>
          <Route to="/dogs/pitbulls/Runa">
            <PitBull/>
          </Route>
          <Route to="/">
            <Home />
          </Route> */}
        </Routes>
      </Router>



      {/* <header className="App-header">
        <h1>whats up yall</h1>
        <PitBull name="kiki" breed="red heeler" age={7} favFood="poop" />
        <Bulldog dogName={nameBulldog} setNameBulldog={setNameBulldog}/>
        <PitBull name="runa" breed="pit" age={5} favFood="anything" />
        <div>{nameBulldog}</div>
      </header>

      <div>
        <h1>number is {number}</h1>
        <button
          className="form-control"
          onClick={e => getBulldogName(e)}
        >Add 1 to number</button>
      </div> */}
    </div>
  );
}

export default App;
