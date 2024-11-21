import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://imgs.search.brave.com/jBpd4UfT0UYETk9Eh-VlDPl8EO4d1RFRlpWW5iEIqxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk4Lzg0LzY5/LzM2MF9GXzI5ODg0/NjkwOV9tc3NiOU1w/bGlVR1UyMmtXMHIw/aTdkTWpQd2RHTWta/eS5qcGc)`}}
    ></div>
      </>
  )
}

export default App
