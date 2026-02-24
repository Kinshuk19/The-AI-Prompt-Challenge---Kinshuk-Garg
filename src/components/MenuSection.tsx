import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Plus, Minus, Leaf } from "lucide-react";
import { foodItems, categories } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

interface MenuSectionProps {
  activeCategory: string | null;
}

const MenuSection = ({ activeCategory }: MenuSectionProps) => {
  const [selectedCat, setSelectedCat] = useState<string | null>(activeCategory);
  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const { addItem, items, updateQuantity } = useCart();

  // Sync external category changes
  if (activeCategory !== null && activeCategory !== selectedCat) {
    setSelectedCat(activeCategory);
  }

  const filtered = useMemo(() => {
    let result = foodItems;
    if (selectedCat) result = result.filter((i) => i.category === selectedCat);
    if (vegOnly) result = result.filter((i) => i.veg);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      );
    }
    return result.sort((a, b) => b.orders - a.orders);
  }, [selectedCat, search, vegOnly]);

  const getCartQty = (id: string) => items.find((i) => i.id === id)?.quantity || 0;

  return (
    <section id="menu" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg">Most loved dishes by our customers</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border font-medium transition-colors ${
              vegOnly
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-card text-foreground border-border hover:border-accent"
            }`}
          >
            <Leaf className="w-4 h-4" />
            Veg Only
          </button>
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
          <button
            onClick={() => setSelectedCat(null)}
            className={`shrink-0 px-5 py-2 rounded-full font-medium transition-colors ${
              !selectedCat ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border hover:bg-muted"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(selectedCat === cat.id ? null : cat.id)}
              className={`shrink-0 px-5 py-2 rounded-full font-medium transition-colors ${
                selectedCat === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:bg-muted"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const qty = getCartQty(item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.tags?.includes("bestseller") && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        Bestseller
                      </span>
                    )}
                    {item.veg && (
                      <span className="absolute top-3 right-3 w-6 h-6 rounded border-2 border-accent flex items-center justify-center bg-background">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground leading-tight">{item.name}</h3>
                      <div className="flex items-center gap-1 text-sm shrink-0">
                        <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                        <span className="font-medium text-foreground">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-foreground">₹{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                        )}
                      </div>
                      {qty === 0 ? (
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addItem(item)}
                          className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          ADD
                        </motion.button>
                      ) : (
                        <div className="flex items-center gap-2 bg-primary rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, qty - 1)}
                            className="p-1.5 text-primary-foreground hover:opacity-80"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold text-primary-foreground min-w-[16px] text-center">{qty}</span>
                          <button
                            onClick={() => updateQuantity(item.id, qty + 1)}
                            className="p-1.5 text-primary-foreground hover:opacity-80"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl mb-2">😕</p>
            <p className="text-muted-foreground text-lg">No dishes found. Try a different search!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
