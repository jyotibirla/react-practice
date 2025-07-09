import { useState } from 'react'

import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false); //by default false value
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
//useRef hook
const passwordReference= useRef(null)
const passwordGenerator=useCallback(()=>{    //optimization ke liye
  let pass=""
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed) string+="0123456789";
  if(charallowed)  string+="@!~#$%^&*{}()"
for(let i=1;i<=length;i++)
{
  let char=Math.floor(Math.random()*string.length+1)

pass+= string.charAt(char)
}
setPassword(pass)

},[length,numberallowed,charallowed,setPassword])

const copyPasswordtoClipboard= useCallback(()=>{
  passwordReference.current?.select();
  passwordReference.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberallowed,charallowed,setPassword])

  return (
    <>
      <div className="w-full max-w-xl mx-auto text-3xl shadow-md rounded-lg 
       px-4 py-3 my-8 text-black bg-gray-800">
        <h1 className='text-white text-center my-3'>password Generator</h1>
        <div className="  flex shadow rounded-lg overflow-hidden mb-4 bg-emerald-400">
         <input type="text" 
         value={password}
         className="outline-none w-full py-1 px-3 "
         placeholder='password'
         ref={passwordReference}

         readOnly/>
         <button
         onClick={copyPasswordtoClipboard}
         className='bg-blue-600 px-3 py-0.5 shrink-0 cursor-pointer'>copy</button>
         </div>
         <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-2'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer my-0.5'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label className='text-2xl text-orange-400'>Length:{length}</label>
          </div>
        <div className='flex items-center gap-x-2'>
           <input type="checkbox"
           defaultChecked={numberallowed}
           id="numberInput" 
           onChange={()=>{setNumberAllowed((prev)=>!prev)}}
           />
           <label htmlFor='numberInput' className='text-2xl text-orange-400'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
           <input type="checkbox"
           defaultChecked={charallowed}
           id="characterInput" 
           onChange={()=>{setCharAllowed((prev)=>!prev)}}
           />
           <label htmlFor='characterInput' className='text-2xl text-orange-400'>Characters</label>
        </div>
         </div>
       </div>
    </>
  )
}

export default App
