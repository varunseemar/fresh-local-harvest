
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { toast } from "@/components/ui/sonner";
import { submitOrder } from '@/services/mockData';

const CartPage = () => {
  const { cart, currentStore, clearCart, getCartTotal } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const hasItems = cart.length > 0;
  const cartTotal = getCartTotal();
  
  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    
    if (!customerName.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const orderData = {
        customerName,
        items: cart,
        total: cartTotal,
        storeId: currentStore?.id,
        storeName: currentStore?.name
      };
      
      const response = await submitOrder(orderData);
      
      if (response.success) {
        // Store order details in session storage for the confirmation page
        sessionStorage.setItem('orderDetails', JSON.stringify({
          orderId: response.orderId,
          customerName,
          total: cartTotal
        }));
        
        // Clear cart and navigate to confirmation
        clearCart();
        navigate('/confirmation');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('There was a problem placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
        <Link to="/" className="text-store-green hover:underline">
          ← Continue shopping
        </Link>
      </div>
      
      {hasItems ? (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              {currentStore && (
                <div className="mb-4 pb-4 border-b">
                  <p className="text-sm text-gray-500">Items from:</p>
                  <p className="font-medium">{currentStore.name}</p>
                </div>
              )}
              
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between py-2 border-b">
                <span>Delivery Fee</span>
                <span>₹0.00</span>
              </div>
              
              <div className="flex justify-between py-3 font-bold text-lg">
                <span>Total</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              
              <form onSubmit={handleSubmitOrder} className="mt-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-store-green hover:bg-store-green/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full mt-2"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/">
            <Button className="bg-store-green hover:bg-store-green/90">
              Browse Stores
            </Button>
          </Link>
        </div>
      )}
    </PageContainer>
  );
};

export default CartPage;
