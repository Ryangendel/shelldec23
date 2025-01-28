import { useEffect, useState } from "react"
import './style.css';
import { useParams } from 'react-router-dom'

function HomepageOne(props){

  const [pic, setPic] = useState("")
  const [pokeName, setPokeName] = useState("")
//pikachu 
//eevee
//ditto

const par = useParams(); 
console.log("**********")
console.log(par)
console.log("**********")


  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/${par.id}/${par.pname}`)
    .then(data=>data.json())
    .then(cleanedData =>{
      console.log("===============================================")
      console.log(cleanedData)
      console.log("===============================================")
     setPic(cleanedData.sprites.front_default)
     setPokeName(cleanedData.name)
    })
  },[])

 
    console.log(props)
      return(
        <div>
        <div className="homepage">HOMEPAGE</div>
        <h1>{par.productname}</h1>
        <h1>{par.id}</h1>
        <div>
           <img src={pic} alt="BigCo Inc. logo"/>
        </div>
        <div>
          <h2>{pokeName}</h2>
        </div>
        </div>
      )
    }
  
  export default HomepageOne;