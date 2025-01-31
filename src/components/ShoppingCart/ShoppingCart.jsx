import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const { items, total, dispatch } = useCart();

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
          <Link to="/" className={styles.continueShopping}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.items}>
            {items.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <p>${item.price} each</p>
                </div>
                <div className={styles.quantityControls}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => 
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: parseInt(e.target.value) }
                      })
                    }
                  />
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
                <div className={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.summary}>
            <div className={styles.total}>
              <h3>Total:</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
            <div className={styles.actions}>
              <Link to="/" className={styles.continueShopping}>
                Continue Shopping
              </Link>
              <Link to="/checkout" className={styles.checkoutButton}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;