import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  
let myObj={
  username:"jyoti",
  age: 21
}
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
            <Card username="jyoti" btnText="click me"/>
             <Card username="chaiourcode " />
    </>
  )
}

export default App
