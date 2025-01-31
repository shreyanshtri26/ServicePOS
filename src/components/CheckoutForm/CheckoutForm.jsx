import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CheckoutForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

const CheckoutForm = () => {
  const { dispatch, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      <div className={styles.checkoutWrapper}>
        <Formik
          initialValues={{ name: '', email: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch({ type: 'CLEAR_CART' });
              navigate('/receipt', { state: { customer: values, total } });
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className={styles.error} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className={styles.error} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <Field type="tel" name="phone" placeholder="10-digit number" />
                <ErrorMessage name="phone" component="div" className={styles.error} />
              </div>

              <div className={styles.total}>
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>

              <div className={styles.buttons}>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Complete Purchase'}
                </button>
                <Link to="/cart" className={styles.backLink}>
                  Back to Cart
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;