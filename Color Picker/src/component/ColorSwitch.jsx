import { useState } from "react";

export default function ColorSwitch() {
  const [color, setColor] = useState("");

  function colorChange() {
    setColor(event.target.value);
  }

  return (
    <div
      className="font-sans grid grid-cols-1 w-screen h-screen border-5 border-zinc-600 "
      style={{ backgroundColor: color }}
    >
      <h1 className="grid justify-items-center items-center text-3xl italic font-bold ">
        Color Picker
      </h1>
      <div className="flex flex-col justify-center justify-items-center items-center text-2xl font-bold">
        <p className="pb-4 text-black">Selected Color: {color}</p>
        <div className="flex justify-center">
          <label htmlFor="">Select a color:</label>
          <input
            type="color"
            className="ml-3 items-center w-10 h-7  rounded-md border-gray-500 border-4"
            value={color}
            onChange={colorChange}
          />
        </div>
      </div>
    </div>
  );
}
