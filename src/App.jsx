import { Fragment } from "react"
import "./assets/style.css"
// than cua component
let name = "nguyen van A";
let blue = {color: " blue"};
// khai bao ham handleClick
const handleClick = () => {
  alert("toi da bam vao")
}

function App() {
  
  return (
    <Fragment>
         <h1 className="title">hello anh em. minh ten {name}</h1>
          <p style = {blue} >buoi thu 3</p>
          <button onClick = {handleClick}>bam vao day</button>
    </Fragment>
  )
}

export default App
