export const fetchServices = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(services); // Import services from mockData if needed
      }, 500);
    });
  };
  
  export const processPayment = (amount) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, transactionId: Date.now().toString() });
      }, 1000);
    });
  };