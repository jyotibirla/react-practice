import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)

  const addValue =()=>{
   // console.log("clicked",counter);
   
    //counter=counter+1
    if(counter<20)
    /*setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)      esa likhne se ye sirf ek hi bar update karega add karne pe 6 dega
  setCounter(counter+1) */  
  
  //to ise resolve karne ke liye
  setCounter(previouscounter=>previouscounter+1)
  setCounter(previouscounter=>previouscounter+1)  //to isse update hoke value 8 ayegi
  setCounter(previouscounter=>previouscounter+1)
  }
  const removeValue=()=>{
    if(counter>0)
       setCounter(counter-1)
  }
  
//let counter=5
  return (
    <>
      <h1>chai our react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
