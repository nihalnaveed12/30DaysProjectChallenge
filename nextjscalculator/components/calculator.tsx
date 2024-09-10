"use client";

import { ChangeEvent, useState, MouseEvent } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    setResult(result + e.currentTarget.value);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelte = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="container w-auto h-auto bg-gray-900 rounded-lg">
        <div className="screen">
          <input
            type="text"
            value={result}
            className=" bg-transparent text-white  outline-none text-right p-2 rounded-lg text-2xl m-3"
            placeholder="0"
            readOnly
          />
        </div>
        <div className="keyboard">
          <div className="flex justify-between m-3 p-2">
            <input
              type="button"
              value={"C"}
              onClick={handleClear}
              className="bg-gray-700 hover:bg-gray-500  shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"DE"}
              onClick={handleDelte}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"%"}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"/"}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
          </div>
          <div className="flex justify-between m-3 p-2">
            <input
              type="button"
              value={"7"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"8"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"9"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"*"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
          </div>
          <div className="flex justify-between m-3 p-2">
            <input
              type="button"
              value={"4"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"5"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"6"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"-"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
          </div>
          <div className="flex justify-between m-3 p-2">
            <input
              type="button"
              value={"1"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"2"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"3"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"+"}
              onClick={handleClick}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
          </div>
          <div className="flex justify-between m-3 p-2">
            <input
              type="button"
              value={"00"}
              onClick={handleClick}
              className="bg-gray-700 hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              onClick={handleClick}
              value={"0"}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              onClick={handleClick}
              value={"."}
              className="bg-gray-700  hover:bg-gray-500  w-12 h-12 rounded-lg"
            />
            <input
              type="button"
              value={"="}
              onClick={handleCalculate}
              className="bg-gray-700  hover:bg-gray-500 shadow-md w-12 h-12 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
