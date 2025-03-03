import React, { useState } from 'react'

const Index = () => {

 const [input, setInput] = useState("");
   let prev = input
 const handleClick = (value)=>{
    setInput((prev) => prev + value);
 }
 const clearInput = ()=>{
    setInput("")
 }


 const calculateResult = ()=>{
    try {
        setInput(Function(` return (${input})`)().toString());
      } catch {
        setInput("Error");
      }

 }

  return (
    <div className='bg-[green] h-[500px] w-[500px] rounded-md  justify-self-center p-10 text-white'>
      
          <div>
          <input
        type="text"
        className="w-full h-[60px] rounded-md p-3 text-black text-right text-2xl outline-none mb-3"
        value={input}
        readOnly
        placeholder='0'
      />
       </div>
   
   
          <div className="grid grid-cols-4 gap-2 w-full mt-5">
        {["1", "2", "3","-", "4", "5", "6", "+", "7", "8","9" , "/", "0", "*","=", "C"].map((btn, index) => (
          <button
            key={index}
            className="w-[80px] h-[70px] bg-white text-black text-xl rounded-md shadow-md hover:bg-[grey]"
            onClick={() => {
             if (btn === "C")  {
                 clearInput();  
             } else if ((btn === "=")) {
                calculateResult();  
             }
             else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        </div>

     

    </div>
  )
}

export default Index