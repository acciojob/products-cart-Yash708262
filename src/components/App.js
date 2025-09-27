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

  // Add product to cart with unique key
  const addToCart = (product) => {
    const uniqueKey = Date.now() + Math.random();
    setCart([...cart, { ...product, key: uniqueKey }]);
  };

  // Remove product from cart
  const removeFromCart = (key) => {
    setCart(cart.filter((item) => item.key !== key));
  };

  return (
    <div>
      {/* Do not remove the main div */}

      {/* Products List */}
      <div className="container">
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id} className="item">
            <span className="item-text">{product.name}</span>
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add Item
            </button>
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
            {cart.map((item) => (
              <li key={item.key} className="cart-item">
                <span className="cart-item-text">{item.name}</span>
                <button className="remove-btn" onClick={() => removeFromCart(item.key)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
