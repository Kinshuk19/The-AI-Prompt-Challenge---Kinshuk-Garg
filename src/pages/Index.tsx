import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import OffersSection from "@/components/OffersSection";
import MenuSection from "@/components/MenuSection";
import CartSheet from "@/components/CartSheet";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setTimeout(() => {
      document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartOpen={() => setCartOpen(true)} />
        <HeroSection />
        <CategoriesSection onCategoryClick={handleCategoryClick} />
        <OffersSection />
        <MenuSection activeCategory={activeCategory} />
        <FooterSection />
        <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
