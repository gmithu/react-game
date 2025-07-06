import React, { useState } from "react";

// ✅ Define your products array
const products = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.49 },
  { id: 3, name: "Orange", price: 0.79 },
];

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      {products.map((value) => (
        <div key={value.id} className="mb-2">
          <span>
            {value.name} - {value.price}
          </span>
          <button
            className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => handleAddToCart(value)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h2 className="text-lg font-semibold mt-6">Cart({cart.length})</h2>
      <ul className="list-disc ml-5">
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
