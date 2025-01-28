import {shoeBrands, callAPI} from "../utils/names"

function Bulldog(props){
console.log("=============")
console.log(props)
console.log("=============")

var changeDogName = (event) =>{
  var indexShoe = Math.floor(Math.random() * shoeBrands.length);
var randomShoe = shoeBrands[indexShoe]
props.setNameBulldog(randomShoe)
}


    return(
      <div>
        <div onClick={e => changeDogName(e)}>THIS IS A BUTTON</div>
      </div>
    )
  }

  export default Bulldog;