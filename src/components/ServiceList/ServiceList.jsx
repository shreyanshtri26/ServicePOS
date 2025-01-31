import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { services, categories } from '../../services/mockData';
import styles from './ServiceList.module.css';

const ServiceList = () => {
  const { dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search services..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className={styles.grid}>
        {filteredServices.map(service => (
          <div key={service.id} className={styles.card}>
            <h3>{service.name}</h3>
            <p className={styles.price}>${service.price}</p>
            <p className={styles.duration}>{service.duration}</p>
            <p className={styles.description}>{service.description}</p>
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: service })}
              className={styles.addButton}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;