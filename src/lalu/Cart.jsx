import React, { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      src: process.env.PUBLIC_URL + "/shw.jpg",
      rate: "29$",
      name: "Brooks type1",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow.webp",
      rate: "25$",
      name: "Brooks Extreame",
    },
    {
      src: process.env.PUBLIC_URL + "/sw.avif",
      rate: "30$",
      name: "Brooks type1",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow1.jpg",
      rate: "35$",
      name: "N-style",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow2.avif",
      rate: "38$",
      name: "N-style",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow3.jpg",
      rate: "38$",
      name: "F-style-trend",
    },
  ]);
  const [searchinput, setSearchinput] = useState("");
  const [filterdUser, setFilterdUser] = useState(items);

  const [Cart, setCart] = useState([]);

  function countclick(index) {
    setCart((user) => [...user, items[index]]);
  }

  function handlestart(search) {
    if (search.trim() !== "") {
      const filterd = items.filter((e) =>
        e.name.toLowerCase().startsWith(search.toLowerCase())
      );
      setFilterdUser(filterd);
    } else {
      setFilterdUser(items);
    }
  }

  function filterd(index) {
    const udtcart = Cart.filter((_, i) => i !== index);
    setCart(udtcart);
  }

  return (
    <div className="flex h-screen justify-center items-center gap-7 flex-col w-full">
      <input
        type="text"
        className=" bg-gray-300 w-6/12 h-10 rounded-2xl "
        placeholder="    Search Items"
        onChange={(e) => {
          setSearchinput(e.target.value);
          handlestart(e.target.value);
        }}
      />

      <div className="flex justify-center items-center gap-14 h-9/12">
        <div className=" w-96 h-36"></div>
        <div className=" w-6/12 h-full rounded-2xl bg-sky-100 gap-9 flex flex-wrap justify-center p-16 items-center ">
          {filterdUser.map((value, index) => (
            <div key={index}>
              <img
                src={value.src}
                className="h-44 w-60 border-amber-400 border rounded-3xl cursor-pointer  "
              />{" "}
              <div className="w-16 bg-amber-200 h-7 rounded-b-full flex justify-center hover:text-2xl">
                {value.rate}
              </div>
              <h1 className="text-gray-500">{value.name}</h1>
              <button
                className="bg-gray-200 p-1 text-green-500 rounded-s-full"
                onClick={() => {
                  countclick(index);
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <div className="flex h-3/4  ">
          <div className=" w-96 h-72 rounded-3xl bg-orange-100 flex p-4 overflow-auto  flex-col gap-3">
            <div className=" text-amber-700 font-extrabold text-2xl">
              your cart ({Cart.length})
            </div>

            <ul className="flex flex-col gap-2">
              {Cart.map((value, index) => (
                <li
                  key={index}
                  className="flex  h-12 rounded-2xl p-2 bg-orange-200 justify-between font-bold text-gray-500"
                >
                  {value.name}-{value.rate}{" "}
                  <button
                    className="bg-slate-400  rounded-2xl text-blue-600 flex w-32 h-8  items-center justify-center "
                    onClick={() => {
                      filterd(index);
                    }}
                  >
                    Cancel order
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
