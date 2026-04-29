import './css/App.css';
import Content from './Layout/Content/Content';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import CartPage from './Layout/CartPage/CartPage';
import CardPage from './Layout/CardPage/CardPage';
import "./css/utilites.css";
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("my_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("my_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const isExist = prevCart.find(item => item.id === product.id);
      if (isExist) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="App flex flex-col">
        <Header cart={cart} />

        <Routes>
          <Route path="/" element={<Content addToCart={addToCart} />} />

          <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>} />

          <Route path="/product/:id" element={<CardPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;