import React, { useState } from "react";

export default function NewExaple() {
  const [act, setAct] = useState(true);

  function change(e) {
    const check = e.target.checked;
    if (check) {
      setAct("a");
    } else {
      setAct("b");
    }
    console.log(check);
  }

  return (
    <div className="flex gap-7 justify-center p-10 ">
      active <input type="checkbox" onChange={change} />
      {act}
    </div>
  );
}
