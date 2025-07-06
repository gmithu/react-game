import React, { useState } from "react";

export default function Qrdata() {
  const [user, setUser] = useState(["mango","orange"]);

  const [name, setName] = useState("");

  function data() {
    if (name.trim() !== "") {
      setUser([...user, name]);
    }
    setName("")
  }
  
  function fltr(index) {
setUser(  user.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <input
        type="text"
        className="border"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button onClick={data}>click</button>
      <ul>
        {user.map((value, index) => (
          <li key={index}>
            {value}{" "}
            <button
              className="border"
              onClick={() => {
                fltr(index);
              }}
            >
              X
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
