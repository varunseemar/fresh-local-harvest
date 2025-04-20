
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <h3>{item.name}</h3>
          <p className="ml-4">₹{item.price * item.quantity}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">₹{item.price} per {item.unit}</p>
      </div>
      
      <div className="flex items-center ml-4">
        <Button 
          variant="outline" 
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          -
        </Button>
        <span className="mx-2 w-8 text-center">{item.quantity}</span>
        <Button 
          variant="outline" 
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </div>
      
      <Button
        variant="ghost"
        className="ml-4 text-sm font-medium text-red-600 hover:text-red-800"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default CartItem;
