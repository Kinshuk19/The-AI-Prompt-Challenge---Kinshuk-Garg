import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";
import { offers } from "@/data/menuData";

const OffersSection = () => {
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + offers.length) % offers.length);
  const next = () => setCurrent((c) => (c + 1) % offers.length);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="offers" className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Today's Hot Offers 🔥
          </h2>
          <p className="text-muted-foreground text-lg">Grab these deals before they're gone!</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl bg-gradient-to-br ${offers[current].bgColor} p-8 md:p-12 text-primary-foreground relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-foreground/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary-foreground/10 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-block text-5xl md:text-7xl font-display font-bold mb-2"
                >
                  {offers[current].discount}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{offers[current].title}</h3>
                <p className="text-primary-foreground/80 text-lg mb-6">{offers[current].subtitle}</p>
                <button
                  onClick={() => copyCode(offers[current].code)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 hover:bg-primary-foreground/30 transition-colors font-mono font-bold text-lg"
                >
                  {offers[current].code}
                  {copied === offers[current].code ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center hover:shadow-card-hover transition-shadow text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center hover:shadow-card-hover transition-shadow text-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {offers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
