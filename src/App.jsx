import { useEffect, useState ,useCallback} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [data,setData]=useState([])

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqerstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += ":;_-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length + 1);
      
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, 
  [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator()
  },
   [length, numberAllowed, charAllowed, passwordGenrator,]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white">password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder=" password"
            value={Password}
            className="outline-none w-full py-1px-3"
            readOnly
          />
          <button className="text-white">copy</button>
        </div>
        <div className="flex text-s gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length :{length}</label>
          </div>

          <div>
          <input
              type="checkbox"
              min={6}
              max={100}
              value={numberAllowed}
              className="cursor-pointer"
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label> number :{numberAllowed}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
            />
            <label>Character {charAllowed}</label>
          </div>
        </div>
      </div>
      <div className="text-white bg-black rounded-md">zain</div>
     
    </>
  );
}

export default App;
