
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const StoreCard = ({ store }) => {
  return (
    <Link to={`/store/${store.id}`}>
      <Card className="overflow-hidden h-full card-hover">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={store.image} 
            alt={store.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-white/90 text-store-text rounded-full px-2 py-1 text-sm font-medium">
            ⭐ {store.rating}
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="font-bold text-lg">{store.name}</h3>
          <p className="text-muted-foreground text-sm">{store.location}</p>
        </CardContent>
        <CardFooter className="border-t pt-3 pb-3">
          <p className="text-sm text-gray-600 line-clamp-2">{store.description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoreCard;
