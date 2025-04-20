
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const ConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get order details from session storage
    const storedDetails = sessionStorage.getItem('orderDetails');
    
    if (storedDetails) {
      setOrderDetails(JSON.parse(storedDetails));
    } else {
      // If no order details are found, redirect to home
      navigate('/');
    }
    
    // Clear order details from session storage when component unmounts
    return () => {
      sessionStorage.removeItem('orderDetails');
    };
  }, [navigate]);
  
  if (!orderDetails) {
    return null; // Will redirect via the useEffect
  }
  
  return (
    <PageContainer>
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-store-green mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Thank you, {orderDetails.customerName}!</h1>
          <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="text-sm text-gray-500 mb-1">Order ID</div>
            <div className="font-medium">{orderDetails.orderId}</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="text-sm text-gray-500 mb-1">Total Amount</div>
            <div className="font-medium">₹{orderDetails.total.toFixed(2)}</div>
          </div>
          
          <p className="text-sm text-gray-500 mb-6">
            We'll send you a confirmation once your order is ready for delivery.
          </p>
          
          <Link to="/">
            <Button className="bg-store-green hover:bg-store-green/90">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ConfirmationPage;
