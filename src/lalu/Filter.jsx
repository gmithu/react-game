import React, { useState } from "react";

export default function Filter() {
  const [alluser, setAlluser] = useState([
    "fortuner",
    "jaguar",
    "defender",
    "wagon R",
    "G wagon",
  ]);

  const [fuser, setFuser] = useState(alluser);
  const [s, setS] = useState("");

  function filterd(search) {
    if (search.trim() !== "") {
      const newUser = alluser.filter((e) => e.toLowerCase().startsWith(search.toLowerCase()));
      setFuser(newUser);
    } else {
      setFuser(alluser);
    }
  }

  return (
    <div>
      <input
        type="text"
        className="border"
        onChange={(e) => {
          setS(e.target.value);
          filterd(e.target.value);
        }}
      />

      {fuser.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </div>
  );
}
