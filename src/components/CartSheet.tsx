import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
}

const CartSheet = ({ open, onClose }: CartSheetProps) => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-bold text-foreground">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-1">Add some delicious items!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 p-3 rounded-xl bg-card"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm truncate">{item.name}</h4>
                        <p className="text-primary font-bold mt-1">₹{item.price * item.quantity}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1 bg-muted rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:text-primary transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:text-primary transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-xl font-bold text-foreground">₹{totalPrice}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-hero-gradient text-primary-foreground font-bold text-lg shadow-warm"
                >
                  Proceed to Checkout
                </motion.button>
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSheet;
