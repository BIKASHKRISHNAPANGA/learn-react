import { useCallback, useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const [length,setlength]=useState(8);
const [numberAllowed,setNumberAllowed]=useState(false);
const [charAllowed, setCharAllowed]=useState(false);
const[password,setpassword]=useState('');
const passwordRef=useRef(null)
const generatePassword=useCallback(()=>{
let pass="";
let str="abcdfghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(numberAllowed) str+="0123456789";
if(charAllowed) str+="()_+-=[]{};<>/?!@#$%^&*";
for (let index = 1; index < length; index++) {
 const char=Math.floor (Math.random()*str.length+1);
 pass+=str.charAt(char);
}
setpassword(pass)
},[length,numberAllowed,charAllowed])

 const copyPasswordToClipboard=()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
}

useEffect(()=>{
generatePassword()
},[length,charAllowed,numberAllowed])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
<h1 className='text-white text-center my-3'>Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text"
  value={password}
  className='outline-none w-full py-1 px-3'
  placeholder='Password'
  readOnly
  ref={passwordRef}
  />
  <button
  onClick={copyPasswordToClipboard}
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
  >copy</button>

</div>
<div className='flex items-center gap-x-1'>
 <input type="range"
 min={6}
 max={100}
 value={length}
 className='cursor-pointer'
 onChange={(e)=>setlength(e.target.value)}
 />
 <label htmlFor="length">length:{length}</label>
</div>
<div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="charInput">Character</label>
        </div>
</div>
 
    </>
  )
}

export default App
