import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  // Sample product list
  const products = [
    { id: 1, name: "Samsung Galaxy Fold 4" },
    { id: 2, name: "Iphone 14 Pro" },
    { id: 3, name: "Pixel 5" },
    { id: 4, name: "Mi note 6" },
    { id: 5, name: "FireStick" },
    { id: 6, name: "OnePlus Nord" },
  ];

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, { ...product, key: Date.now() }]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      {/* Products List */}
      <div className="container">
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id} className="item">
            <span>{product.name}</span>
            <button onClick={() => addToCart(product)}>Add Item</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>There are no items in the cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={item.key || index}>
                {item.name}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;