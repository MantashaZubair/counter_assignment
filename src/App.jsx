import { useState, useEffect } from 'react'
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0)
  
   console.log("component render")

  // add counter
  const addCounter = ()=>{
    setCounter((preCounter)=>preCounter+1)
  }


  // removecounter
  const removeCounter = ()=>{
    if(counter===0) return
    setCounter((preCounter)=>preCounter-1)
  }
  

  //  we can use multiple useEffect for requirement
  useEffect(()=>{
    console.log("component Mounted")
  },[])

  useEffect(()=>{
    console.log("state change")
  },[counter])


  return (
    <>
      <h1>Counter: {counter}</h1>
      <button style={{marginBottom:"5px"}} onClick={addCounter}>Add Count</button>
       <br/>
      <button onClick={removeCounter}>Remove Count</button>
       
    </>
  )
}

export default App
