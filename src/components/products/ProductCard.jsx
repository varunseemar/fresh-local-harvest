
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden h-full card-hover">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <div className="font-bold text-store-green">₹{product.price}</div>
        </div>
        <p className="text-muted-foreground text-sm">per {product.unit}</p>
      </CardContent>
      <CardFooter className="border-t pt-3 pb-3">
        <Button 
          className="w-full bg-store-green hover:bg-store-green/90"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
