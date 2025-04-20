
import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [currentStore, setCurrentStore] = useState(null);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedStore = localStorage.getItem('currentStore');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    if (savedStore) {
      setCurrentStore(JSON.parse(savedStore));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save current store to localStorage whenever it changes
  useEffect(() => {
    if (currentStore) {
      localStorage.setItem('currentStore', JSON.stringify(currentStore));
    }
  }, [currentStore]);

  const addToCart = (product) => {
    // Check if product is from a different store
    if (currentStore && product.storeId !== currentStore.id && cart.length > 0) {
      if (window.confirm(`Adding items from ${product.storeName} will clear your current cart from ${currentStore.name}. Continue?`)) {
        setCart([{ ...product, quantity: 1 }]);
        setCurrentStore({ id: product.storeId, name: product.storeName });
        toast.success(`${product.name} added to cart`);
      }
    } else {
      // First product in cart or from same store
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if item already in cart
        setCart(
          cart.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        );
      } else {
        // Add new item to cart
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      
      // Set current store if not already set
      if (!currentStore) {
        setCurrentStore({ id: product.storeId, name: product.storeName });
      }
      
      toast.success(`${product.name} added to cart`);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(
      cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    const itemToRemove = cart.find(item => item.id === productId);
    
    setCart(cart.filter(item => item.id !== productId));
    
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from cart`);
    }
    
    // If cart is empty, reset current store
    if (cart.length === 1) {
      setCurrentStore(null);
      localStorage.removeItem('currentStore');
    }
  };

  const clearCart = () => {
    setCart([]);
    setCurrentStore(null);
    localStorage.removeItem('cart');
    localStorage.removeItem('currentStore');
    toast.info('Cart cleared');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        currentStore,
        addToCart, 
        updateQuantity, 
        removeFromCart, 
        clearCart, 
        getCartTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
