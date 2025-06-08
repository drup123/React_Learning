import { useCallback, useState, useEffect, useRef} from 'react'


function App() {
 const [lenght, setLenght] = useState(8)
 const [NumberAllow, setNumberAllow] = useState(false)
 const [charAllow , setcharAllow] = useState(false)
 const [password , setpassword] = useState("")

 const passwordRef = useRef(null)

 const PasswordGenerator = useCallback(() => {

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(NumberAllow) str += "0123456789"
        if(charAllow) str += "~!@$%^&*_+?><}"

        for(let i = 1; i <= lenght; i++) {
          let char = Math.floor(Math.random() * str.length + 1)

          pass += str.charAt(char)
        }

        setpassword(pass)

 }, [lenght, NumberAllow, charAllow, setpassword])

 const copyToClipboard = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect(() => {
  PasswordGenerator()
 }, [lenght, NumberAllow, charAllow, PasswordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-4'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value= {lenght}
            className='cursor-pointer'
            onChange={(e) => {setLenght(e.target.value)}}
            />
            <label>Length : {lenght}</label>
        </div>
        <div className='flex item-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={NumberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllow((prev) => !prev)
            }}
            />
            <label>Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setcharAllow((prev) => !prev)
            }}
            />
            <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
