
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStoreById, getProductsByStoreId } from '@/services/mockData';
import PageContainer from '@/components/layout/PageContainer';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const StorePage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart } = useCart();
  
  const hasItemsInCart = cart.length > 0;

  useEffect(() => {
    const fetchStoreAndProducts = async () => {
      try {
        setLoading(true);
        const storeData = await getStoreById(id);
        const productData = await getProductsByStoreId(parseInt(id));
        
        setStore(storeData);
        setProducts(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching store data:', error);
        setLoading(false);
      }
    };

    fetchStoreAndProducts();
  }, [id]);

  if (loading) {
    return (
      <PageContainer>
        <div className="animate-pulse">
          <div className="h-10 w-1/3 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </PageContainer>
    );
  }

  if (!store) {
    return (
      <PageContainer>
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold text-red-500">Store not found</h1>
          <p className="mt-4">The store you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="mt-6">Return to home</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <Link to="/" className="text-store-green hover:underline mb-2 inline-block">
              ← Back to stores
            </Link>
            <h1 className="text-3xl font-bold">{store.name}</h1>
          </div>
          {hasItemsInCart && (
            <Link to="/cart">
              <Button className="bg-store-orange hover:bg-store-orange/90">
                <ShoppingCart className="mr-2 h-4 w-4" />
                View Cart
              </Button>
            </Link>
          )}
        </div>
        <p className="text-lg text-gray-600">{store.location} • ⭐ {store.rating}</p>
        <p className="mt-2">{store.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Available Products</h2>
        {products.length === 0 ? (
          <p>No products available at this store.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default StorePage;
