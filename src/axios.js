import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.stripe.com/',
  headers: {
    'Authorization': 'Bearer sk_test_51NkyZGL7ZcWMouynfNTiCnnT6htGQCUUtynva0s7gNIWvb3LNVski8B3QGP9hrJd5y51GjlGIc75ZXVz7dMWdKhm0080jfjgtE', // Replace with your actual Stripe secret key
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to log Stripe-specific errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Log the Stripe-specific error details
      console.error("Stripe Error:", error.response.data);
    } else {
      // Log other errors (e.g., network issues)
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;