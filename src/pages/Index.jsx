
import { useState, useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import StoreCard from '@/components/stores/StoreCard';
import { getAllStores } from '@/services/mockData';

const Index = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const storeData = await getAllStores();
        setStores(storeData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stores:', error);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return (
    <PageContainer>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-store-green">Fresh Local Harvest</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Shop from your neighborhood stores for the freshest produce delivered to your doorstep.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default Index;
