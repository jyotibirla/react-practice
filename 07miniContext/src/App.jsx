import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>react with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
