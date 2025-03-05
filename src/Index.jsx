import React, { useState } from "react";
import calc from "./assets/calculator.mp4";

const Index = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    
      try {
          setInput(Function(` return (${input})`)().toString());
        } catch {
          setInput("Error");
        }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video autoPlay loop  className="absolute w-full h-full object-cover">
        <source src={calc} type="video/mp4" className="h-[500px]" />
        Your browser does not support the video tag.
      </video>

      {/* Calculator UI */}
      <div className="relative bg-transparent h-[500px] w-[400px] m-5 rounded-md flex flex-col justify-center p-10 text-white shadow-xl">
        {/* Display */}
        <input
          type="text"
          className="w-full h-[60px] rounded-md p-3 text-black text-right text-2xl outline-none mb-3"
          value={input}
          readOnly
          placeholder="0"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 w-full mt-5">
          {["1", "2", "3", "-", "4", "5", "6", "+", "7", "8", "9", "/", "0", "*", "=", "C"].map(
            (btn, index) => (
              <button
                key={index}
                className="w-[70px] h-[70px] bg-white text-black text-xl rounded-md shadow-md hover:bg-gray-400 transition"
                onClick={() => {
                  if (btn === "C") {
                    clearInput();
                  } else if (btn === "=") {
                    calculateResult();
                  } else handleClick(btn);
                }}
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
