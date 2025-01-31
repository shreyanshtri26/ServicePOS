import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import ServiceList from './components/ServiceList/ServiceList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Receipt from './components/Receipt/Receipt';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <ErrorBoundary>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ServiceList />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/receipt" element={<Receipt />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </CartProvider>
    </Router>
  );
}

export default App;