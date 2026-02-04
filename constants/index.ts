
// CATEGORY 
// lib/constants.ts

export interface Category {
  id: string;
  name: string;
  products: string[]; // Array of Product IDs
  imageUrl: string;
  description?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  cPrice: number; // Current Price
  dPrice: number; // Discounted/Original Price
  description: string;
  images: string[];
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  bgImage: string;
}

export interface Carousal {
  id: string;
  numberAt: number;
  image: string;
  description: string;
  bgImage: string;
}

// --- SAMPLE DATA ---

export const CATEGORIES: Category[] = [
  { id: 'cat1', name: 'Toys & Games', imageUrl: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=500', products: ['p1', 'p2', 'p3', 'p4'] },
  { id: 'cat2', name: 'Home & Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=500', products: ['p5', 'p6', 'p7', 'p8'] },
  { id: 'cat3', name: 'Beauty & Personal Care', imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500', products: ['p9', 'p10', 'p11', 'p12'] },
  { id: 'cat4', name: 'Automotive Accessories', imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=500', products: ['p13', 'p14', 'p15', 'p16'] },
  { id: 'cat5', name: 'Health & Household', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500', products: ['p17', 'p18', 'p19', 'p20'] },
];

export const COMPANIES: Company[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `comp${i + 1}`,
  name: `Affirma Distributing ${i + 1}`,
  logo: 'https://cdn-icons-png.flaticon.com/512/3176/3176363.png',
  description: 'Leading B2B supplier for high-quality commercial goods.',
  bgImage: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format`,
}));

export const CAROUSAL_ITEMS: Carousal[] = [
  { id: 'car1', numberAt: 1, image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&w=1200', description: 'Big Holiday Sale', bgImage: '#007FFF' },
  { id: 'car2', numberAt: 2, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&w=1200', description: 'Wholesale Excellence', bgImage: '#333' },
  { id: 'car3', numberAt: 3, image: 'https://images.unsplash.com/photo-1534452203294-49c8913c7c7c?auto=format&w=1200', description: 'New Arrivals', bgImage: '#FF5733' },
  { id: 'car4', numberAt: 4, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=1200', description: 'Tech Gadgets', bgImage: '#2ECC71' },
  { id: 'car5', numberAt: 5, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&w=1200', description: 'Best Sellers', bgImage: '#9B59B6' },
];

export const PRODUCTS: Product[] = [
  // Toys & Games
  { 
    id: 'p1', 
    categoryId: 'cat1', 
    name: 'Giant Plush Teddy Bear', 
    cPrice: 45, 
    dPrice: 60, 
    description: 'Soft and cuddly companion for kids.', 
    images: ['https://plus.unsplash.com/premium_photo-1702830272114-5432fd35c414?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p2', 
    categoryId: 'cat1', 
    name: 'Remote Control Car', 
    cPrice: 30, 
    dPrice: 40, 
    description: 'High-speed RC car with 2.4GHz control.', 
    images: ['https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?q=80&w=800'] 
  },
  { 
    id: 'p3', 
    categoryId: 'cat1', 
    name: 'LEGO Building Set', 
    cPrice: 85, 
    dPrice: 100, 
    description: 'Creative building blocks for all ages.', 
    images: ['https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=800'] 
  },
  { 
    id: 'p4', 
    categoryId: 'cat1', 
    name: 'Strategy Board Game', 
    cPrice: 25, 
    dPrice: 35, 
    description: 'Challenging multiplayer strategy game.', 
    images: ['https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=800'] 
  },
  
  // Home & Kitchen
  { 
    id: 'p5', 
    categoryId: 'cat2', 
    name: 'Stainless Steel Knife Set', 
    cPrice: 120, 
    dPrice: 150, 
    description: 'Professional grade kitchen knives.', 
    images: ['https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=800'] 
  },
  { 
    id: 'p6', 
    categoryId: 'cat2', 
    name: 'Non-Stick Frying Pan', 
    cPrice: 45, 
    dPrice: 55, 
    description: 'Eco-friendly non-stick coating.', 
    images: ['https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800'] 
  },
  { 
    id: 'p7', 
    categoryId: 'cat2', 
    name: 'Electric Coffee Maker', 
    cPrice: 90, 
    dPrice: 110, 
    description: 'Programmable drip coffee machine.', 
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800'] 
  },
  { 
    id: 'p8', 
    categoryId: 'cat2', 
    name: 'Mixing Bowl Set', 
    cPrice: 20, 
    dPrice: 30, 
    description: 'Set of 5 nesting stainless steel bowls.', 
    images: ['https://images.unsplash.com/photo-1686472950413-9647efea07d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  
  // Beauty & Personal Care
  { 
    id: 'p9', 
    categoryId: 'cat3', 
    name: 'Hydrating Face Serum', 
    cPrice: 25, 
    dPrice: 35, 
    description: 'Hyaluronic acid for glowing skin.', 
    images: ['https://plus.unsplash.com/premium_photo-1764599500228-4f617bc70cc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p10', 
    categoryId: 'cat3', 
    name: 'Matte Liquid Lipstick', 
    cPrice: 15, 
    dPrice: 20, 
    description: 'Long-lasting vibrant lip color.', 
    images: ['https://images.unsplash.com/photo-1752327091756-b24f2764b653?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p11', 
    categoryId: 'cat3', 
    name: 'Sandalwood Body Wash', 
    cPrice: 12, 
    dPrice: 18, 
    description: 'Refreshing organic body wash.', 
    images: ['https://images.unsplash.com/photo-1669212408959-fdde3b2ed6a2?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p12', 
    categoryId: 'cat3', 
    name: 'Professional Hair Dryer', 
    cPrice: 65, 
    dPrice: 80, 
    description: 'Ionic technology for frizz-free hair.', 
    images: ['https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800'] 
  },

  // Automotive
  { 
    id: 'p13', 
    categoryId: 'cat4', 
    name: 'Performance Engine Oil', 
    cPrice: 40, 
    dPrice: 50, 
    description: 'Full synthetic oil for modern engines.', 
    images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800'] 
  },
  { 
    id: 'p14', 
    categoryId: 'cat4', 
    name: 'Portable Car Vacuum', 
    cPrice: 35, 
    dPrice: 45, 
    description: 'Powerful suction for vehicle interiors.', 
    images: ['https://images.unsplash.com/photo-1768387666361-0d2319d716e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p15', 
    categoryId: 'cat4', 
    name: 'Leather Seat Covers', 
    cPrice: 150, 
    dPrice: 200, 
    description: 'Universal fit premium leather protectors.', 
    images: ['https://images.unsplash.com/photo-1564842505181-8862a3b9b173?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] 
  },
  { 
    id: 'p16', 
    categoryId: 'cat4', 
    name: 'Dashboard Camera', 
    cPrice: 80, 
    dPrice: 110, 
    description: '4K resolution with night vision.', 
    images: ['https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?q=80&w=800'] 
  },

  // Health
  { 
    id: 'p17', 
    categoryId: 'cat5', 
    name: 'Digital Blood Pressure Monitor', 
    cPrice: 55, 
    dPrice: 70, 
    description: 'Accurate home health monitoring.', 
    images: ['https://media.istockphoto.com/id/2236973526/photo/digital-device-measuring-blood-pressure-and-pulse-ideal-for-personal-health-and-hypertension.webp?a=1&b=1&s=612x612&w=0&k=20&c=l-XvxRUl8JbKbqG9S7p-UBHrXU9qcnwXe0AdN6z9-Eo='] 
  },
  { 
    id: 'p18', 
    categoryId: 'cat5', 
    name: 'Multivitamin Supplements', 
    cPrice: 22, 
    dPrice: 30, 
    description: 'Daily essential nutrients for adults.', 
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800'] 
  },
  { 
    id: 'p19', 
    categoryId: 'cat5', 
    name: 'Yoga Mat (Eco-friendly)', 
    cPrice: 35, 
    dPrice: 45, 
    description: 'High-density padding for workouts.', 
    images: ['https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800'] 
  },
  { 
    id: 'p20', 
    categoryId: 'cat5', 
    name: 'First Aid Kit (100 pcs)', 
    cPrice: 25, 
    dPrice: 35, 
    description: 'Emergency medical supplies for home/travel.', 
    images: ['https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800'] 
  },
];

export const PRODUCTS_LIST: Product[] = [
  // Toys & Games
  { id: 'p1', categoryId: 'cat1', name: 'Giant Plush Teddy Bear', cPrice: 45, dPrice: 60, description: 'Soft and cuddly companion for kids.', images: ['https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400'] },
  { id: 'p2', categoryId: 'cat1', name: 'Remote Control Car', cPrice: 30, dPrice: 40, description: 'High-speed RC car with 2.4GHz control.', images: ['https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400'] },
  
  // Home & Kitchen
  { id: 'p7', categoryId: 'cat2', name: 'Electric Coffee Maker', cPrice: 90, dPrice: 110, description: 'Programmable drip coffee machine.', images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400'] },
  { id: 'p8', categoryId: 'cat2', name: 'Mixing Bowl Set', cPrice: 20, dPrice: 30, description: 'Set of 5 nesting stainless steel bowls.', images: ['https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=400'] },
  
  // Beauty & Personal Care
  { id: 'p9', categoryId: 'cat3', name: 'Hydrating Face Serum', cPrice: 25, dPrice: 35, description: 'Hyaluronic acid for glowing skin.', images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400'] },
];