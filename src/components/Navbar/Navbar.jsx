import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        ServicePOS
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Services
        </Link>
        <Link to="/cart" className={styles.cartLink}>
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;