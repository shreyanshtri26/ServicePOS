```markdown
# ServicePOS - Point of Sale Interface for Service Management

A modern Point of Sale (POS) interface for managing service-based transactions, built with React. Designed for fitness studios, wellness centers, and educational institutes to manage service sales with an intuitive interface.

## 🚀 Features

- **Service Catalog**  
  Browse services with filtering by category/search
- **Smart Cart System**  
  Add/remove items, adjust quantities, real-time total calculation
- **Customer Management**  
  Collect customer details during checkout with form validation
- **Mock Checkout Flow**  
  Simulated payment processing with success/failure states
- **Digital Receipts**  
  Printable transaction summaries with customer details
- **Responsive Design**  
  Mobile-first approach with tablet/desktop optimization
- **Cart Persistence**  
  LocalStorage integration for uninterrupted sessions
- **Modern UI**  
  Animations, gradient backgrounds, and interactive elements

## 📦 Installation

1. Clone repository:
   ```bash
   git clone https://github.com/shreyanshtri26/ServicePOS.git
   cd service-pos
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Run tests:
   ```bash
   npm test
   ```

## 🖥️ Usage

1. **Browse Services**  
   - Use search bar and category filters
   - Click "Add to Cart" for desired services

2. **Manage Cart**  
   - Adjust quantities with number input
   - Remove items with trash icon
   - Click "Proceed to Checkout" when ready

3. **Customer Checkout**  
   - Fill validated customer details form
   - Submit to process mock payment

4. **Receipt Generation**  
   - View printable transaction summary
   - Start new sale with "Return to Home"

## 🛠️ Tech Stack

- **Framework**: React 18 + React Router 6
- **State Management**: Context API + useReducer
- **Form Handling**: Formik + Yup
- **Styling**: CSS Modules + Modern Layouts
- **Build Tool**: Create React App
- **Testing**: React Testing Library

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── context/         # Cart state management
├── services/        # Mock data and API simulations
├── assets/          # Images/icons (if any)
├── App.js           # Root component
└── index.js         # Entry point
```

## 🧠 Design Decisions

1. **State Management**  
   Chose Context API over Redux for simpler cart state handling

2. **Form Validation**  
   Implemented Formik+Yup for robust form management

3. **Responsive Strategy**  
   Mobile-first CSS with grid/flex layouts

4. **Error Handling**  
   Global error boundary + form validation errors

## ⚠️ Assumptions & Limitations

- Uses mock service data (no real database)
- Payment processing is simulated
- Receipts not persisted between sessions
- No user authentication system
- Test coverage limited to core features

## 🚧 Future Enhancements

- [ ] Admin dashboard with sales analytics
- [ ] Multi-language/currency support
- [ ] User accounts with purchase history
- [ ] Service management CRUD operations
- [ ] Real payment gateway integration
- [ ] PDF receipt generation
