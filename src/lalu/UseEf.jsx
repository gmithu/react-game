import index from "@/pages";
import React, { useState } from "react";

export default function UseEf() {
  const [item, setItem] = useState(["one", "two", "three"]);
  const [name, setName] = useState("");

  function add() {
    if (name.trim() !== "") {
      setItem([...item, name]);
    }
    setName("")
  }

  function fltr(index) {
    const newItem = item.filter((e, i) => i !== index);
    setItem(newItem);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter"
        value={name}
      />
      <p onClick={add}>save</p>
      <h1>
        {item.map((value, index) => (
          <li key={index}>
            {value}{" "}
            <button
              className="bg-red-500"
              onClick={() => {
                fltr(index);
              }}
            >
              X
            </button>
          </li>
        ))}
      </h1>
    </div>
  );
}
