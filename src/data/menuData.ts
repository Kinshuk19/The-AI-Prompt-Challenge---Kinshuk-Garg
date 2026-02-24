export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  orders: number;
  veg: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export const categories: Category[] = [
  { id: "pizza", name: "Pizza", icon: "🍕", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" },
  { id: "burger", name: "Burgers", icon: "🍔", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop" },
  { id: "sushi", name: "Sushi", icon: "🍣", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop" },
  { id: "pasta", name: "Pasta", icon: "🍝", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop" },
  { id: "salad", name: "Salads", icon: "🥗", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop" },
  { id: "dessert", name: "Desserts", icon: "🍰", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop" },
  { id: "drinks", name: "Drinks", icon: "🥤", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop" },
  { id: "biryani", name: "Biryani", icon: "🍚", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop" },
];

export const foodItems: FoodItem[] = [
  // Pizza
  { id: "p1", name: "Margherita Pizza", description: "Classic tomato, mozzarella & fresh basil", price: 249, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", category: "pizza", rating: 4.5, orders: 1250, veg: true, tags: ["bestseller"] },
  { id: "p2", name: "Pepperoni Pizza", description: "Loaded pepperoni with mozzarella cheese", price: 349, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", category: "pizza", rating: 4.7, orders: 980, veg: false, tags: ["popular"] },
  { id: "p3", name: "BBQ Chicken Pizza", description: "Smoky BBQ sauce with grilled chicken", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", category: "pizza", rating: 4.6, orders: 870, veg: false },
  // Burgers
  { id: "b1", name: "Classic Smash Burger", description: "Double patty with cheese & special sauce", price: 199, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", category: "burger", rating: 4.8, orders: 2100, veg: false, tags: ["bestseller", "popular"] },
  { id: "b2", name: "Veggie Crunch Burger", description: "Crispy veggie patty with fresh veggies", price: 149, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop", category: "burger", rating: 4.3, orders: 650, veg: true },
  { id: "b3", name: "Chicken Zinger", description: "Spicy fried chicken with coleslaw", price: 229, originalPrice: 299, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop", category: "burger", rating: 4.5, orders: 1400, veg: false, tags: ["popular"] },
  // Sushi
  { id: "s1", name: "Salmon Nigiri Set", description: "Fresh salmon over seasoned rice", price: 499, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop", category: "sushi", rating: 4.9, orders: 430, veg: false, tags: ["premium"] },
  { id: "s2", name: "California Roll", description: "Crab, avocado & cucumber roll", price: 349, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop", category: "sushi", rating: 4.6, orders: 520, veg: false },
  // Pasta
  { id: "pa1", name: "Creamy Alfredo Pasta", description: "Rich & creamy white sauce pasta", price: 279, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop", category: "pasta", rating: 4.4, orders: 780, veg: true, tags: ["popular"] },
  { id: "pa2", name: "Arrabbiata Penne", description: "Spicy tomato sauce with garlic & chili", price: 249, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", category: "pasta", rating: 4.3, orders: 560, veg: true },
  // Salads
  { id: "sa1", name: "Caesar Salad", description: "Romaine, parmesan, croutons & dressing", price: 199, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop", category: "salad", rating: 4.2, orders: 340, veg: true },
  { id: "sa2", name: "Greek Salad Bowl", description: "Fresh veggies, feta cheese & olives", price: 179, originalPrice: 249, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop", category: "salad", rating: 4.5, orders: 290, veg: true, tags: ["healthy"] },
  // Desserts
  { id: "d1", name: "Chocolate Lava Cake", description: "Warm molten chocolate center", price: 199, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop", category: "dessert", rating: 4.8, orders: 1890, veg: true, tags: ["bestseller"] },
  { id: "d2", name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 249, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", category: "dessert", rating: 4.7, orders: 720, veg: true },
  // Drinks
  { id: "dr1", name: "Mango Smoothie", description: "Fresh mango blended with yogurt", price: 129, image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop", category: "drinks", rating: 4.6, orders: 1100, veg: true, tags: ["popular"] },
  { id: "dr2", name: "Cold Brew Coffee", description: "Smooth cold-brewed black coffee", price: 149, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop", category: "drinks", rating: 4.4, orders: 890, veg: true },
  // Biryani
  { id: "bi1", name: "Hyderabadi Chicken Biryani", description: "Aromatic dum-cooked biryani with raita", price: 299, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", category: "biryani", rating: 4.9, orders: 3200, veg: false, tags: ["bestseller", "popular"] },
  { id: "bi2", name: "Paneer Biryani", description: "Fragrant rice with paneer & spices", price: 249, image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&h=300&fit=crop", category: "biryani", rating: 4.5, orders: 1450, veg: true },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=600&fit=crop",
];

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  bgColor: string;
  discount: string;
}

export const offers: Offer[] = [
  { id: "o1", title: "Flat 20% OFF", subtitle: "On orders above ₹499", code: "QUICK20", bgColor: "from-primary to-secondary", discount: "20%" },
  { id: "o2", title: "Items Below ₹199", subtitle: "Budget-friendly meals", code: "BUDGET199", bgColor: "from-accent to-primary", discount: "₹199" },
  { id: "o3", title: "Flat 50% OFF", subtitle: "On your first order", code: "FIRST50", bgColor: "from-secondary to-primary", discount: "50%" },
  { id: "o4", title: "Free Delivery", subtitle: "On orders above ₹299", code: "FREEDEL", bgColor: "from-primary to-accent", discount: "FREE" },
  { id: "o5", title: "Buy 1 Get 1 Free", subtitle: "On selected desserts", code: "BOGO", bgColor: "from-accent to-secondary", discount: "BOGO" },
];
