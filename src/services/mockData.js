
// Mock data for our store application

export const stores = [
  {
    id: 1,
    name: "Fresh Mart",
    location: "MG Road",
    description: "Your neighborhood fresh produce supplier with organic options",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7
  },
  {
    id: 2,
    name: "Organic Hub",
    location: "Indiranagar",
    description: "Fully organic produce directly from farms to your table",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9
  },
  {
    id: 3,
    name: "Local Greens",
    location: "Koramangala",
    description: "Local farmers' collective offering seasonal produce",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5
  }
];

export const products = [
  // Fresh Mart Products
  {
    id: 101,
    storeId: 1,
    storeName: "Fresh Mart",
    name: "Apple",
    description: "Fresh red apples imported from Himachal",
    price: 150,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 102,
    storeId: 1,
    storeName: "Fresh Mart",
    name: "Banana",
    description: "Organic bananas perfect for breakfast",
    price: 50,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 103,
    storeId: 1,
    storeName: "Fresh Mart",
    name: "Carrot",
    description: "Farm fresh carrots for your salads and cooking",
    price: 60,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-851c1730e8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 104,
    storeId: 1,
    storeName: "Fresh Mart",
    name: "Tomato",
    description: "Ripe red tomatoes locally sourced",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 105,
    storeId: 1,
    storeName: "Fresh Mart",
    name: "Potato",
    description: "Premium quality potatoes",
    price: 40,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },

  // Organic Hub Products
  {
    id: 201,
    storeId: 2,
    storeName: "Organic Hub",
    name: "Organic Spinach",
    description: "Pesticide-free leafy greens",
    price: 70,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 202,
    storeId: 2,
    storeName: "Organic Hub",
    name: "Organic Cucumber",
    description: "Hydroponic cucumbers grown naturally",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 203,
    storeId: 2,
    storeName: "Organic Hub",
    name: "Organic Avocado",
    description: "Imported Hass avocados, perfectly ripe",
    price: 200,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 204,
    storeId: 2,
    storeName: "Organic Hub",
    name: "Organic Kale",
    description: "Nutrient-rich kale from organic farms",
    price: 90,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1618685959528-01d030c3d851?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 205,
    storeId: 2,
    storeName: "Organic Hub",
    name: "Organic Bell Pepper",
    description: "Colorful, sweet bell peppers",
    price: 120,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },

  // Local Greens Products
  {
    id: 301,
    storeId: 3,
    storeName: "Local Greens",
    name: "Fresh Broccoli",
    description: "Locally grown broccoli heads",
    price: 110,
    unit: "head",
    image: "https://images.unsplash.com/photo-1614336215203-05a588f74627?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 302,
    storeId: 3,
    storeName: "Local Greens",
    name: "Strawberry",
    description: "Sweet strawberries from Mahabaleshwar",
    price: 180,
    unit: "box",
    image: "https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 303,
    storeId: 3,
    storeName: "Local Greens",
    name: "Okra",
    description: "Farm fresh ladies finger/okra",
    price: 70,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1591282583316-f17ea74cabc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 304,
    storeId: 3,
    storeName: "Local Greens",
    name: "Lemon",
    description: "Juicy lemons perfect for beverages",
    price: 40,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  },
  {
    id: 305,
    storeId: 3,
    storeName: "Local Greens",
    name: "Mushroom",
    description: "Fresh button mushrooms",
    price: 90,
    unit: "pack",
    image: "https://images.unsplash.com/photo-1570108923307-3bb911042456?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true
  }
];

// Utility functions to access the mock data
export const getAllStores = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stores);
    }, 300); // Simulating network delay
  });
};

export const getStoreById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const store = stores.find(store => store.id === parseInt(id));
      if (store) {
        resolve(store);
      } else {
        reject(new Error('Store not found'));
      }
    }, 300);
  });
};

export const getProductsByStoreId = (storeId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storeProducts = products.filter(product => product.storeId === parseInt(storeId));
      resolve(storeProducts);
    }, 300);
  });
};

// Mock order submission function
export const submitOrder = (orderData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate a random order id
      const orderId = Math.floor(10000 + Math.random() * 90000);
      
      resolve({
        success: true,
        orderId,
        ...orderData,
        date: new Date().toISOString()
      });
    }, 800); // Simulate network delay
  });
};
