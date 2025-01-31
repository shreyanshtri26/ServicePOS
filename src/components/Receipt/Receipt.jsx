import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Receipt.module.css';

const Receipt = () => {
  const { state } = useLocation();
  const transaction = state || {};

  return (
    <div className={styles.container}>
      <div className={styles.receipt}>
        <h2>Thank you for your purchase!</h2>
        <div className={styles.details}>
          <h3>Transaction Summary</h3>
          {transaction.customer && (
            <div className={styles.customerInfo}>
              <p><strong>Name:</strong> {transaction.customer.name}</p>
              <p><strong>Email:</strong> {transaction.customer.email}</p>
              <p><strong>Phone:</strong> {transaction.customer.phone}</p>
            </div>
          )}
          <div className={styles.amount}>
            <p><strong>Total Amount:</strong></p>
            <p>${transaction.total?.toFixed(2) || '0.00'}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Receipt;